import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {

  const datas = [
    {
      id: 1,
      name: "Kurd.Movie",
      img: "/kurdmovie.png",
      detail: "the ultimate movie website that offers seamless search options by name and genre, featuring a wide range of movies, series, and animations. Dive into each selection with detailed information, including trailers and more, to enhance your cinematic experience like never before.",        
      skills: ["React.js", "Redux.js", "React Router", "Tailwind CSS"],
      link: "https://kurdmovie.netlify.app",
      github: "https://github.com/diyarim123/Kurd.Movie",
    },
    {
      id: 2,
      name: "Gamezone",
      img: "/gamezone.png",
      detail: "your go-to game website with a user-friendly search feature, an extensive library of games, and in-depth details including screenshots, and more, to help you discover and explore your next gaming adventure with ease.",
      skills: ["React.js", "Redux.js", "React Router"],
      link: "https://diyarim123gamezone.netlify.app/",
      github: "https://github.com/diyarim123/gamezone",
    },
    {
      id: 3,
      name: "Tindog",
      img: "/dog.png",
      detail: "Tindog: The ultimate mobile app for canine companionship, connecting dogs and their owners in a tail-wagging world of friendships.",
      skills: ["Javascript","JQuery","Bootstrap"],
      link: "https://diyarim123.github.io/Tindog/",
      github: "https://github.com/diyarim123/Tindog"
    },
    {
      id: 4,
      name : "Simon",
      img :"/simon.png",
      detail : "Simon Game: Test your memory and reflexes with this classic electronic memory game brought to life on the web.",
      skills : ["Javascript","JQuery","Bootstrap"],
      link :"https://diyarim123.github.io/Simon-Game/",
      github : "https://github.com/diyarim123/Simon-Game"
    },
    {
      id: 5,
      name : "Calculator",
      img : "/calculator.png",
      detail : "An online calculator website providing a versatile range of tools for performing quick and accurate mathematical calculations with ease.",
      skills : ["Javascript", "DOM"],
      link : "https://diyarim123.github.io/Calculator/",
      github : "https://github.com/diyarim123/Calculator"
    },
    {
      id : 6,
      name : "Cash System",
      img : "/cash.png",
      detail : "A comprehensive cash system website that streamlines financial transactions, ensuring secure and efficient management of cash flow for businesses.",
      skills : ["Javascript", "DOM"],
      link : "https://diyarim123.github.io/Cash-System/",
      github : "https://github.com/diyarim123/Cash-System"
    }
  ];

  const [open, setOpen] = useState(false);

  function handleExpand() {
    setOpen(!open)
  }

  return (
    <div id="projects" className="text-slate-500 my-40 p-5 relative">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <p className="text-3xl font-semibold mr-2">
          Projects
          <span className="text-emerald-500 text-3xl font-semibold">.</span>
        </p>
        <div className="w-full h-[1px] bg-slate-800"></div>
      </div>

      {/* Content */}
      <div
      className="grid lg:grid-cols-2 grid-cols-1 gap-10"
      >
        {datas.slice(0 , open ? 6 : 2).map((data) => (
          <motion.div
          key={data.id}
          whileInView={{y : [50, 0]}}
          transition={{type : "spring", yoyo : Infinity}}
          >
            <img
              className="w-[30rem] mb-10 h-60 object-cover rounded-md bg-slate-800 p-5"
              src={data.img}
              alt={data.name}
            />
            <div className="flex items-center mb-5 gap-3">
              <p className="lg:text-2xl text-lg font-semibold">{`${data.name}`}</p>
              <div className="w-full h-[.5px] bg-slate-800"></div>
              <div className="flex gap-2">
                <a href={data.github} target="_blank" rel="noreferrer">
                  <i
                    className="fa-brands fa-github hover:scale-105 text-xl"
                    style={{ color: "#10b981" }}
                  ></i>
                </a>
                <a href={data.link} target="_blank" rel="noreferrer">
                  <i
                    className="fa-sharp fa-solid fa-link hover:scale-105 text-xl"
                    style={{ color: "#10b981" }}
                  ></i>
                </a>
              </div>
            </div>
            <div>
              <div className="font-400">
                {data.skills.map((skill, index) => {
                  if (index === 0) {
                    return (
                      <span className="text-brand font-extralight text-md">
                        {skill}
                      </span>
                    );
                  } else {
                    return (
                      <span className="text-brand font-extralight text-md">{` - ${skill} `}</span>
                    );
                  }
                })}
              </div>
              <div className="mt-5">
                <p className="leading-7">{data.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div 
      className="expand absolute bottom-[-4rem] px-[0.60rem] cursor-pointer py-1 rounded-full bg-emerald-500 left-1/2"
      onClick={handleExpand}
      >
      {open ? 
        <i class="fa-solid fa-arrow-up" style={{color: "#000"}}></i>
        :
        <i class="fa-solid fa-arrow-down" style={{color: "#000"}}></i>
      }
      </div>
    </div>
  );
}
