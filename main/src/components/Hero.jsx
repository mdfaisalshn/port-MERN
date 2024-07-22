import React from 'react'
import hero from '../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='flex flex-col-reverse justify-center items-center bg-gray-900 h-[95vh] lg:flex-row'>
      <div className='flex flex-col items-start justify-center text-gray-500 p-24 gap-5 lg:w-2/3'>
        <h2 className='text-2xl lg:text-4xl'>Welcome to my portfolio, I am</h2>
        <h1 className='text-4xl lg:text-6xl 2xl:text-8xl text-gray-100'>Mohammed Faisal</h1>
        <h2 className='text-lg lg:text-2xl'>Web Developer | Web Designer | Photographer | Video Editor</h2>
      </div>
      <div className='flex justify-center items-center h-[50%]'>
        <img className='h-[100%] rounded-3xl' src={hero} alt=''/>
      </div>
    </div>
  )
}

export default Hero