import { useGSAP } from '@gsap/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import ModelView from './ModelView'
import { yellowImg } from '../utils'
import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { View } from  '@react-three/drei'
import { models, sizes } from '../constants'
import { animateWithGsapTimeline } from '../utils/animations'



function Model() {

  const[size,setSize] = useState('small')
  const[model,setModel] = useState({
    title:'iPhone 15 Pro in Natural Titanium',  
    color : ['#8f8a81','#ff3fb9','#6f6c64'],
    img: yellowImg

  })

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small  = useRef(new THREE.Group())
  const large = useRef(new THREE.Group())

  const [smallRotation,setSmallRotation] = useState(0)
  const [largeRotation,setLargeRotation] = useState(0)

  const tl =gsap.timeline()

  useEffect(() => {
    if(size === 'large'){
      animateWithGsapTimeline(tl,small,smallRotation,'#view1','#view2',{
        transform: `translateX(-100%)`,
        duration:2
      })
    }
    if(size === 'small'){
      animateWithGsapTimeline(tl,large,largeRotation,'#view2','#view1',{
        transform: `translateX(0%)`,
        duration:2
      })
    }
    

  }, [size])

  useGSAP(() => {
    gsap.to('#heading', {
      opacity: 1,
      y: 0,
      duration: 1,
    })
  }, [])
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">Take a closer look</h1>
      </div>
      <div className="felx flex-col items-center mt-5">
        <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
          <ModelView
          index={1}
          groupRef={small}
          gsapType='view1'
          controlRef={cameraControlSmall}
          setRotationState={setSmallRotation}
          item={model}
          size={size}    
          />
           <ModelView
          index={2}
          groupRef={large}
          gsapType='view2'
          controlRef={cameraControlLarge}
          setRotationState={setLargeRotation}
          item={model}
          size={size}    
          />
           <Canvas className='w-full h-full' style={{position:'fixed',top:0,left:0,bottom:0,right:0,overflow:'hidden'}}
       eventSource= {document.getElementById('root')}
       >
        <View.Port
        />
       </Canvas>
        </div>

        <div className="mx-auto w-full">
          <p className="text-sm font-light text-center mb-5">{model.title}</p>
          <div className="flex-center">
            <ul className="color-container">{models.map((item,i)=>(
              <li key={i} className='w-6 h-6 rounded-full mx-2 cursor-pointer' style={{backgroundColor:item.color[0]}}
              onClick={()=>setModel(item)}/> 
            ))}
            </ul>

            <button className="size-btn-container cursor-pointer">
              {sizes.map(({label,value})=>(
                <span className="size-btn" key = {label} style = {{backgroundColor : size === value? 'white':'transparent', color:size === value? 'black':'white'}}
                onClick={()=>setSize(value)}>{label}</span>
              ))}
            </button>

          </div>
        </div>
      
      </div>
    </section>
  )
}

export default Model