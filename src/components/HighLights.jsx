import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const HighLights = () => {

  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
      
    }),
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 className="section-heading" id="title">Get the Highlights</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">watch the film
              <img src={watchImg}className='ml-2' alt="" /> 
            </p>
            <p className="link">watch the event
              <img src={rightImg} className='ml-2' alt="right" /> 
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
     
    </section>
  )
}

export default HighLights