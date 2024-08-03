import React, { useState } from 'react'

const Navbar = () => {
  let Links =[
    {name: "Home", link:"/"},
    {name: "Projects", link:"/"},
    {name: "Resume", link:"/"},
    {name: "About", link:"/"},
    {name: "Contact", link:"/"}
  ]

  let [open,setOpen]=useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 text-white'>
      <div className='md:flex items-center justify-between bg-gray-950 py-4 m:px-10 px-7'>
        <div className='text-2xl'>
          Mohammed Faisal
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl text-white absolute right-10 top-4 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-gray-950 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-16 opacity-100':'top-[-490px] md:opacity-100 opacity-0'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-9'>
                <a href={link.link} className='hover:text-gray-400'>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>

    // <div className="bg-gray-950 text-white p-5 flex justify-between">
    //   <div>
    //     <h1 className='text-2xl'>Mohammed Faisal</h1>
    //   </div>
    //   <div>
    //     <ul className='flex text-center sm:flex sm:justify-around justify-around gap-16'>
    //       <li className='hover:text-gray-400 cursor-pointer'>Home</li>
    //       <li className='hover:text-gray-400 cursor-pointer'>Projects</li>
    //       <li className='hover:text-gray-400 cursor-pointer'>Resume</li>
    //       <li className='hover:text-gray-400 cursor-pointer'>Blogs</li>
    //       <li className='hover:text-gray-400 cursor-pointer'>About</li>
    //       <li className='hover:text-gray-400 cursor-pointer'>Contact</li>
    //     </ul>
    //   </div>
    // </div>
  )
}

export default Navbar