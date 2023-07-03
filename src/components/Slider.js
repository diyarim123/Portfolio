import React from 'react'

export default function Navbar() {
  return (
    <div className='slider'>
      <h1 className='text-xl font-poppins bg-gray-900 rounded-lg p-1'>D<span className='text-xl p-1 font-600 text-emerald-500'>.</span></h1>
      <div className='flex flex-col gap-5 text-md'>
        <a className='hover:text-emerald-500 vertical' href='#home'>Home</a>
        <a className='hover:text-emerald-500 vertical' href='#about'>About</a>
        <a className='hover:text-emerald-500 vertical' href='#skills'>Skills</a>
        <a className='hover:text-emerald-500 vertical' href='#projects'>Projects</a>
        <a className='hover:text-emerald-500 vertical' href='#contact'>Contact</a>
      </div>
    </div>
  )
}
