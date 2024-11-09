import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <div className='p-6 text-white w-full sticky z-20 top-0 backdrop-blur-sm'>

      {/* Icons */}
      <div className='flex justify-between'>
        <div className='flex gap-5 justify-center items-center'>
          <a className='text-2xl' target='_blank' rel="noreferrer" href='https://github.com/diyarim123'><i className="fa-brands fa-github" style={{color: "#10b981"}}></i></a>
          <a className='text-2xl' target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/diyari-mohammed-3a2122228/'><i className="fa-brands fa-linkedin" style={{color: "#10b981"}}></i></a>
          <a className='text-2xl' target='_blank' rel="noreferrer" href='https://www.facebook.com/diyari.mhamad.54'><i className="fa-brands fa-facebook" style={{color: "#10b981"}}></i></a>  
        </div>
        <motion.div
        initial = {{y : 100}}
        animate = {{y : 10}}
        transition={{duration : 1, yoyo: Infinity}}
        > 
          <a className='px-5 py-3 border-2 border-emerald-500 text-emerald-500 hover:text-black font-semibold hover:bg-emerald-500 rounded-md' href='/cv/CV.pdf' >My Resume</a>
        </motion.div>
      </div>



    </div>
  )
}
