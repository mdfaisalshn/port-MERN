import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-gray-950 text-white p-3">
        <ul className='justify-center text-center sm:flex sm:justify-around'>
          <li className='hover:text-gray-400 cursor-pointer'>Home</li>
          <li className='hover:text-gray-400 cursor-pointer'>Projects</li>
          <li className='hover:text-gray-400 cursor-pointer'>Resume</li>
          <li className='hover:text-gray-400 cursor-pointer'>Blogs</li>
          <li className='hover:text-gray-400 cursor-pointer'>About</li>
          <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar