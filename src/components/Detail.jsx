import React from 'react'
import { motion } from 'framer-motion'

export default function Detail() {
  return (
    <div id='home' className='mb-20 flex lg:flex-row flex-col items-center justify-between w-full gap-10 lg:gap-0'>

        {/* Left Side */}
        <div className='flex flex-col gap-3 p-5'>
          <p className='text-lg lg:text-2xl font-500'>Hello, <span className='text-emerald-500'>I'm</span></p>   
          <motion.div
          whileInView={{
            x : [200, 0],
            opacity : [0.25, 1],
            backgroundColor : ["#10b981", "#111"]
          }}
          transition = {{duration : 1.25, yoyo : Infinity}}
          >
          <h2 className='text-emerald-500 font-600 text-4xl lg:text-5xl'>Diyari Mohammed.</h2>
          </motion.div>
          <motion.div
          whileInView={{
            x : [-200, 0]
          }}
          transition={{duration: 1.25,yoyo : Infinity}}
          >
            <p className='text-xl lg:text-3xl font-500'>a Web Developer</p>
          </motion.div>
          <p className='text-md font-400 text-slate-400 lg:w-[30rem]'>With knowledge in web development, I offer the best projects resulting in quality work</p>
          <span className='mt-5'><a href='#contact' className='text-md font-600 hover:shadow-md bg-emerald-500 px-5 py-3 rounded-md'>Let's Talk</a></span>
        </div>


        {/* Right Side */}
        <motion.div
        initial={{ scale: 0.8, opacity: 0, x: 50 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="relative mt-12 lg:mt-0 flex justify-center items-center lg:px-10"
        >
          {/* Glowing backdrop effect */}
          <div className="absolute w-56 h-56 lg:w-80 lg:h-80 bg-emerald-500/30 rounded-full blur-3xl z-0 animate-pulse"></div>
          
          {/* Image */}
          <img 
            className='relative z-10 w-64 h-64 lg:w-[22rem] lg:h-[22rem] object-cover rounded-full border-4 border-slate-800 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:border-emerald-500/80 transition-all duration-500 hover:scale-105' 
            src='/assets/images/me.jpg' 
            alt='Diyari Mohammed' 
          />
        </motion.div>
    </div>
  )
}
