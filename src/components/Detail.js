import React from 'react'
import { motion } from 'framer-motion'

export default function Detail() {
  return (
    <div id='home' className='mb-20 flex lg:flex-row flex-col items-center'>

        {/* Left Side */}
        <div className='flex flex-col gap-3 p-5'>
          <p className='text-lg lg:text-2xl font-500'>Hello, <span className='text-emerald-500'>I'm</span></p>   
          <motion.dv
          whileInView={{
            x : [200, 0],
            opacity : [0.25, 1],
            backgroundColor : ["#10b981", "#111"]
          }}
          transition = {{duration : 1.25, yoyo : Infinity}}
          >
          <h2 className='text-emerald-500 font-600 text-4xl lg:text-5xl'>Diyari Mohammed.</h2>
          </motion.dv>
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
        whileInView={{x : [-100 , 0]}}
        transition={{type : "spring", yoyo : Infinity, duration : 1.5}}
        >
          <img className='object-cover' src='/dev.png' alt='me' />
        </motion.div>
    </div>
  )
}
