import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="p-5 flex flex-col gap-3 text-slate-500">
      <motion.div
        className="flex items-center gap-3"
        whileInView={{ x: [-50, 0] }}
        transition={{ duration: 1, yoyo: Infinity }}
      >
        <h3 className="text-3xl flex items-center font-bold">
          About <span className="text-emerald-500 text-4xl">.</span>
        </h3>
        <div className="w-full h-[1px] bg-slate-800"></div>
      </motion.div>

      <div className="font-400">
        <motion.div
          whileInView={{ x: [50, 0] }}
          transition={{ duration: 1, yoyo: Infinity }}
        >
          <p className="p text-md font-poppins mb-8">
            Hey! I'm <span className="text-slate-400">Diyari</span>, if you
            haven't already gathered that by now. I am a{" "}
            <span className="text-slate-400">
              Full-Stack Web Developer with 5 years of experience
            </span>{" "}
            based in Kurdistan. I have a strong background in software
            engineering, bridging the gap between engaging user interfaces and
            robust backend architectures. My primary expertise lies in the
            modern JavaScript ecosystem, particularly{" "}
            <span className="text-slate-400">
              React.js, Next.js, and Node.js
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          whileInView={{ x: [-50, 0] }}
          transition={{ duration: 1, yoyo: Infinity }}
        >
          <p className="mb-8">
            I hold a Bachelor's degree in{" "}
            <span className="text-slate-400">
              Information Systems Engineering
            </span>
            . Alongside my development work, I also serve as a{" "}
            <span className="text-slate-400">computer science lecturer</span>.
            Teaching has profoundly refined my ability to break down complex
            technical concepts, write clean, well-documented code, and approach
            problem-solving with a structured, educational mindset.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ x: [50, 0] }}
          transition={{ duration: 1, yoyo: Infinity }}
        >
          <p className="mb-8">
            I continuously stay up to date with the latest industry trends and
            best practices. While my foundation is in frontend development, my
            backend skills with
            <span className="text-slate-400">
              {" "}
              Express.js, PostgreSQL, and MongoDB
            </span>{" "}
            allow me to build end-to-end solutions. I am always eager to explore
            new technologies, including AI integrations and advanced database
            design, to optimize performance and deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ x: [-50, 0] }}
          transition={{ duration: 1, yoyo: Infinity }}
        >
          <p className="mb-8">
            Collaboration and teamwork are essential to my workflow. Whether I
            am guiding students in a classroom or collaborating with designers,
            other developers, and stakeholders, I prioritize clear and effective
            communication. I strive to translate client visions into scalable
            applications, ensuring seamless integrations and cohesive user
            experiences from the database to the browser.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ x: [50, 0] }}
          transition={{ duration: 1, yoyo: Infinity }}
          className="flex gap-3 items-center"
        >
          <p className="text-emerald-500 font-semibold text-xl">My Links</p>
          <i class="fa-solid fa-arrow-right" style={{ color: "#10b981" }}></i>
          <a
            className="text-lg hover:scale-110"
            href="https://github.com/diyarim123"
          >
            <i className="fa-brands fa-github" style={{ color: "#10b981" }}></i>
          </a>
          <a
            className="text-lg hover:scale-110"
            href="https://www.linkedin.com/in/diyari-mohammed-3a2122228/"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{ color: "#10b981" }}
            ></i>
          </a>
          <a
            className="text-lg hover:scale-110"
            href="https://www.facebook.com/diyari.mhamad.54"
          >
            <i
              className="fa-brands fa-facebook"
              style={{ color: "#10b981" }}
            ></i>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
