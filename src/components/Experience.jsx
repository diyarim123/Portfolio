import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <div id='about' className='p-5 flex flex-col gap-3 text-slate-500'>

        <motion.div
        className='flex items-center gap-3'
        whileInView={{x : [-50, 0]}}
        transition={{duration: 1, yoyo: Infinity}}
        >
            <h3 className='text-3xl flex items-center font-bold'>Experience <span className='text-emerald-500 text-4xl'>.</span></h3>
            <div className='w-full h-[1px] bg-slate-800'></div>
        </motion.div>

        <div className='font-400'>

          <motion.div
          whileInView={{x : [50, 0]}}
          transition={{duration: 1, yoyo: Infinity}}
          >
            <div className='flex items-center gap-2'>
                <img className='w-24 h-24' src='/assets/images/lezzoo.png' alt='Lezzoo' />
                <div className='flex flex-col gap-2'>
                    <p>Junior Back End Developer . Internship</p>
                    <p>June 2024 - September 2024</p>
                </div>
            </div>
          </motion.div>

          <motion.div
          whileInView={{x : [-50, 0]}}
          transition={{duration: 1, yoyo: Infinity}}
          >
            <p className='mt-8'>
            During my internship at <span className='text-slate-400'>Lezzoo</span>, I gained valuable experience as a Backend Developer. I 
            contributed to the development of the company's point-of-sale system and worked on a 
            customized B2B solution for a restaurant. Through this experience, I honed my skills in 
            JavaScript, React, Node.js, Express.js, MySql, and RESTful APIs. I successfully tackled 
            technical challenges, collaborated effectively with my team, and learned from industry experts.
            </p>
          </motion.div>

        </div>

    </div>
  )
}
