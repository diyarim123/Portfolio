import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: "JavaScript", src: "/assets/images/js.png" },
  { name: "React.js", src: "/assets/images/react.png" },
  { name: "Next.js", src: "/assets/images/next.png" },
  { name: "TypeScript", src: "/assets/images/typescript.png" },
  { name: "Node.js", src: "/assets/images/node.png" },
  { name: "Express.js", src: "/assets/images/express.png" },
  { name: "MySQL", src: "/assets/images/mysql.png" },
  { name: "PostgreSQL", src: "/assets/images/postgresql.png" },
  { name: "MongoDB", src: "/assets/images/mongodb.png" },
  { name: "Redux", src: "/assets/images/redux.png" },
  { name: "HTML5", src: "/assets/images/html.png" },
  { name: "CSS3", src: "/assets/images/css.png" },
]

const softSkills = [
  { name: "Technical Communication", src: "/svg/communication.svg" },
  { name: "Collaboration & Teamwork", src: "/svg/teamwork.svg" },
  { name: "Problem-Solving & Analysis", src: "/svg/problem-solving.svg" },
  { name: "Time Management", src: "/svg/time-management.svg" },
]

export default function Skills() {
  return (
    <div id='skills' className='mt-10 text-slate-500 p-5'>
        <motion.div
        className='flex items-center gap-3'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
            <div className='w-full h-[1px] bg-slate-800'></div>
            <h3 className='text-3xl flex font-bold items-center text-white'>Skills <span className='text-emerald-500 text-4xl'>.</span></h3>
        </motion.div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 my-10'>
            {skills.map((item, index) => (
                <motion.div
                key={index}
                className='bg-[#111827] border border-slate-800 p-6 flex flex-col justify-center gap-4 items-center rounded-xl hover:bg-slate-800 transition-colors duration-300'
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                >
                    <p className='text-slate-200 font-medium tracking-wide'>{item.name}</p>
                    <div className='w-20 h-20 bg-slate-900/80 rounded-lg flex items-center justify-center p-4 shadow-inner border border-slate-700/50'>
                        <img src={item.src} alt={item.name} className='w-full h-full object-contain' />
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
        className='flex items-center gap-3 mt-16'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
            <div className='w-full h-[1px] bg-slate-800'></div>
            <h3 className='text-3xl flex font-bold items-center text-white whitespace-nowrap'>Soft Skills <span className='text-emerald-500 text-4xl'>.</span></h3>
        </motion.div>

        <div className='grid grid-cols-2 gap-6 my-10'>
            {softSkills.map((item, index) => (
                <motion.div
                key={`soft-${index}`}
                className='bg-[#111827] border border-slate-800 p-6 flex flex-col justify-center gap-4 items-center rounded-xl hover:bg-slate-800 transition-colors duration-300'
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                >
                    <p className='text-slate-200 font-medium tracking-wide text-center'>{item.name}</p>
                    <div className='w-20 h-20 bg-slate-900/80 rounded-lg flex items-center justify-center p-4 shadow-inner border border-slate-700/50'>
                        <img src={item.src} alt={item.name} className='w-full h-full object-contain' />
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}
