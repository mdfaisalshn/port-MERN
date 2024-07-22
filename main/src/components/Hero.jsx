import React from 'react'
import hero from '../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='flex bg-gray-900 h-[95vh]'>
      <div className='flex flex-col items-start justify-center text-gray-500 w-2/3 p-24 gap-5'>
        <h2 className='text-4xl'>Welcome to my portfolio, I am</h2>
        <h1 className='text-7xl text-gray-100'>Mohammed Faisal</h1>
        <h2 className='text-2xl'>Web Developer | Web Designer | Photographer | Video Editor</h2>
      </div>
      <div className='flex justify-center items-center'>
        <img className='h-[60%] rounded-3xl' src={hero} alt=''/>
      </div>
    </div>
  )
}

export default Hero