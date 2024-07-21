import React from 'react'

const Hero = () => {
  return (
    <div className='flex bg-gray-900 h-[95vh]'>
      <div className='flex flex-col items-start justify-center text-gray-300 w-2/3 p-24 gap-5'>
        <h2 className='text-5xl'>Welcome to my portfolio</h2>
        <h1 className='text-7xl'>I am Mohammed Faisal</h1>
        <h2 className='text-4xl'>Web Developer</h2>
      </div>
      <div>
        {/* <img src="/assets/hero.jpg" alt="" /> */}
      </div>
    </div>
  )
}

export default Hero