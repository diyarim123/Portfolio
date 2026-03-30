import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Kitn",
    logo: "/assets/images/kitn.png",
    title: "Full-Stack Web Developer",
    type: "Onsite, Full-time",
    duration: "June 2025 - October 2025",
    description: "During my time at Kitn, I worked onsite as a full-time Full-Stack Web Developer. I contributed to building dynamic, responsive web interfaces and developing scalable backend architectures. Through this experience, I honed my skills in React.js, Next.js, TypeScript, Node.js, Express.js, and PostgreSQL. I successfully tackled complex technical challenges, collaborated closely with the team to deliver high-quality solutions, and further refined my expertise in modern web development."
  },
  {
    company: "Lezzoo",
    logo: "/assets/images/lezzoo.png",
    title: "Junior Back End Developer",
    type: "Internship",
    duration: "June 2024 - September 2024",
    description: "During my internship at Lezzoo, I gained valuable experience as a Backend Developer. I contributed to the development of the company's point-of-sale system and worked on a customized B2B solution for a restaurant. Through this experience, I honed my skills in JavaScript, React, Node.js, Express.js, MySql, and RESTful APIs. I successfully tackled technical challenges, collaborated effectively with my team, and learned from industry experts."
  }
];

export default function Experience() {
  return (
    <div id="experience" className="p-5 flex flex-col gap-8 text-slate-400 font-poppins max-w-4xl mx-auto">
      
      {/* Section Header */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-slate-100 flex items-center">
          Experience <span className="text-brand ml-1">.</span>
        </h3>
        <div className="flex-1 h-[1px] bg-slate-800"></div>
      </motion.div>

      {/* Experience List */}
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-brand/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,255,157,0.05)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Company Logo container */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-slate-800/50 p-2 border border-slate-700/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-slate-100 group-hover:text-brand transition-colors duration-300">
                    {exp.title}
                  </h4>
                  <p className="text-lg text-slate-300 font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end text-sm">
                  <span className="text-brand font-semibold">{exp.duration}</span>
                  <span className="text-slate-500 italic">{exp.type}</span>
                </div>
              </div>

              <div className="w-12 h-[1px] bg-slate-800 group-hover:w-full group-hover:bg-brand/20 transition-all duration-500 rounded-full"></div>

              <p className="leading-relaxed text-slate-400">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
