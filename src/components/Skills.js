import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <div id='skills' className='mt-10 text-slate-500 p-5'>
        <motion.div
        className='flex items-center gap-3'
        whileInView={{opacity : [0, 1]}}
        transition={{duration: 1.5, yoyo: Infinity}}
        >
            <div className='w-full h-[1px] bg-slate-800'></div>
            <h3 className='text-3xl flex font-bold items-center'>Skills <span className='text-emerald-500 text-4xl'>.</span></h3>
        </motion.div>

        <div className='grid lg:grid-cols-5 grid-cols-3 lg:gap-10 gap-5 my-10'>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>JavaScript</p>
                <img src='/js.png' alt='javascript'  />
            </motion.div>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>React.js</p>
                <img src='/react.png' alt='/React.js'  />
            </motion.div>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>Node.js</p>
                <img src='/node.png' alt='Node.js'  />
            </motion.div>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>Tailwind</p>
                <img src='/tailwind.png' alt='Tailwind'  />
            </motion.div>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>C++</p>
                <img src='/c++.png' alt='C++'  />
            </motion.div>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>Java</p>
                <img src='/java.png' alt='java'  />
            </motion.div>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>Adobe XD</p>
                <img src='/xd.png' alt='Adobe XD'  />
            </motion.div>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>Php</p>
                <img src='/php.png' alt='Php'  />
            </motion.div>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>Sass</p>
                <img src='/Sass_logo.png' alt='Sass'  />
            </motion.div>

            <motion.div
            className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
            whileInView={{scale : [0, 1]}}
            transition={{duration: 1, yoyo: Infinity}}
            >
                <p className='text-slate-200'>Typescript</p>
                <img src='/typescript.png' alt='Typescript'  />
            </motion.div>


        </div>
    </div>
  )
}
