import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {

  
  return (
    <div id='contact' className='p-5 text-slate-500'>
      <motion.div
      whileInView={{
        opacity : [0, 1]
      }}
      transition={{duration : 1.30, yoyo : Infinity}}
      className='flex flex-col gap-5 justify-center items-center mb-5'
      >
        <h1 className='text-5xl font-900'>Contact<span className='text-5xl text-emerald-500'>.</span></h1>
        <p className='text-center'>Shoot me an email if you want to connect! You can also find me on
        <a 
        href='https://www.linkedin.com/in/diyari-mohammed-3a2122228/'
        target='_blank'
        rel="noreferrer"
        className='font-semibold text-emerald-500 hover:text-semibold hover:underline p-2'>
        Linkedin
        </a>
         or 
         <a 
        href='https://www.facebook.com/diyari.mhamad.54'
        target='_blank'
        rel="noreferrer"
        className='font-semibold text-emerald-500 hover:text-semibold hover:underline p-2'>
        Facebook
        </a>
        if that's more your speed.</p>
        <a href='mailto:diyarimohammed33@gmail.com' className='lg:text-lg text-sm mt-5 font-semibold text-emerald-500 cursor-pointer'><i className="fa-solid fa-envelope" style={{color: "#10b981", marginRight: "5px"}}></i>diyarimohammed33@gmail.com</a>
      </motion.div>
    </div>
  )
}
