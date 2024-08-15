import React from 'react'
import Button from './Button'

function VideoPlayer() {
    return (
      <div>
        <iframe
          width="144"
          height="256"
          src="https://www.youtube.com/embed/e8nH1vbTjPE"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800] w-full mx-auto p-4'>
        <VideoPlayer/>
        <div className='flex-col gap-4'>
        <p>ARE YOU READY TO BECOME</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>ginemena<span className='text-blue-400'>saurus</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>I hereby acknowledege that I may become <span className='text-blue-400 font-medium '>unbelievably gigantasourus</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium '>mass monstrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
        <Button func={() => {
            window.location.href ='#generate'
        }}
        text={'Accept & Begin'}/>
    </div>
  )
}
