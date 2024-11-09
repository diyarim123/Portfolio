import React from 'react'
import { motion } from 'framer-motion'

const skills = [
    {
        name: "Javascript",
        src: "/assets/images/js.png"
    },
    {
        name: "React.js",
        src: "/assets/images/react.png"
    },
    {
        name: "Node.js",
        src: "/assets/images/node.png"
    },
    {
        name: "Express.js",
        src: "/assets/images/express.png"
    },
    {
        name: "MySql",
        src: "/assets/images/mysql.png"
    },
    {
        name: "Redux",
        src: "/assets/images/redux.png"
    },
    {
        name: "HTML5",
        src: "/assets/images/html.png"
    },
    {
        name: "CSS3",
        src: "/assets/images/css.png"
    },
]

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

        <div className='grid lg:grid-cols-5 grid-cols-2 lg:gap-10 gap-5 my-10'>

            {skills?.map((item, index) => (
                <motion.div
                className='bg-slate-800 p-5 flex flex-col justify-center gap-3 items-center rounded-md'
                whileInView={{scale : [0, 1]}}
                transition={{duration: 1, yoyo: Infinity}}
                >
                    <p className='text-slate-200'>{item.name}</p>
                    <img src={item.src} alt={item.name} />
                </motion.div>
            ))}

        </div>
    </div>
  )
}
