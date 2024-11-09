import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div id='about' className='p-5 flex flex-col gap-3 text-slate-500'>

        <motion.div
        className='flex items-center gap-3'
        whileInView={{x : [-50, 0]}}
        transition={{duration: 1, yoyo: Infinity}}
        >
            <h3 className='text-3xl flex items-center font-bold'>About <span className='text-emerald-500 text-4xl'>.</span></h3>
            <div className='w-full h-[1px] bg-slate-800'></div>
        </motion.div>

        <div className='font-400'>

          <motion.div
          whileInView={{x : [50, 0]}}
          transition={{duration: 1, yoyo: Infinity}}
          >
            <p className='p text-md font-poppins mb-8'>
              Hey! I'm <span className='text-slate-400'>Diyari</span>, if you haven't already gathered that by now.
              a <span className='text-slate-400'>frontend developer hailing from the beautiful city of Erbil in Kurdistan. </span>
              I have a strong background in software engineering and a particular focus on frontend development. Working with a variety of tools and technologies,
              my primary expertise lies in <span className='text-slate-400'>React.js</span>, but I'm always open to utilizing the most suitable tools for each project.
            </p>
          </motion.div>

          <motion.div
          whileInView={{x : [-50, 0]}}
          transition={{duration: 1, yoyo: Infinity}}
          >
            <p className='mb-8'>
            I am currently a third-grade student studying Bachelor's in <span className='text-slate-400'>Information System Engineering
            at Erbil Polytechnic University,</span> gaining a comprehensive understanding of engineering
            principles and practical application in the field of information systems.
            </p>
          </motion.div>


          <motion.div
          whileInView={{x : [50, 0]}}
          transition={{duration: 1, yoyo: Infinity}}
          >
            <p className='mb-8'>
              As a frontend developer, I continuously stay up to date with the latest trends, frameworks, 
              and best practices. While React.js is my go-to framework, I'm always eager to explore new technologies such as Angular, Vue.js,
              or any other frontend tools that can improve my development process and deliver exceptional results.
            </p>
          </motion.div>

 

          <motion.div
          whileInView={{x : [-50, 0]}}
          transition={{duration: 1, yoyo: Infinity}}
          >
            <p className='mb-8'>
              Collaboration and teamwork are essential aspects of my work style. I enjoy collaborating with designers,
              backend developers, and other stakeholders to ensure that the final product aligns with the client's vision.
              By effectively communicating ideas and implementing them in clean and maintainable code, I strive to create seamless integrations and cohesive user experiences.
            </p>
          </motion.div>



            <motion.div
            whileInView={{x : [50, 0]}}
            transition={{duration: 1, yoyo: Infinity}}
            className='flex gap-3 items-center'
            >
              <p className='text-emerald-500 font-semibold text-xl'>My Links</p>
              <i class="fa-solid fa-arrow-right" style={{color: "#10b981"}}></i>
              <a className='text-lg hover:scale-110' href='https://github.com/diyarim123'><i className="fa-brands fa-github" style={{color: "#10b981"}}></i></a>
              <a className='text-lg hover:scale-110' href='https://www.linkedin.com/in/diyari-mohammed-3a2122228/'><i className="fa-brands fa-linkedin" style={{color: "#10b981"}}></i></a>
              <a className='text-lg hover:scale-110' href='https://www.facebook.com/diyari.mhamad.54'><i className="fa-brands fa-facebook" style={{color: "#10b981"}}></i></a>  
            </motion.div>

        </div>

    </div>
  )
}
