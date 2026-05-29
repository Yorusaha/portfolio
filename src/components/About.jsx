import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 py-12 bg-white text-black flex justify-between flex-col lg:flex-row items-center gap-10" id="about">

      {/* IMAGE */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
          className="
            h-[360px] lg:h-[350px] w-auto mx-auto rounded-xl
            shadow-lg
            hover:scale-105 transition duration-300
            drop-shadow-[0_0_15px_rgba(239,68,68,0.2)]
          "
          src="/assets/me.webp"
          alt="About Me"
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0 font-bold tracking-wide">
          About{" "}
          <span className="font-extrabold text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]">
            Me
          </span>
        </h2>

        {/* LINE */}
        <div className="w-16 h-[3px] bg-red-600 mt-2 mb-6 rounded"></div>

        <p className="text-gray-500 text-sm/6 lg:text-base mt-5 lg:mt-6 leading-relaxed">
          I'm a Game Development student with a strong passion for Web Development. I enjoy building modern, responsive websites and web applications. I have real client experience building websites for automotive industry businesses, and personal projects including a full-stack e-commerce app and an AI-powered web tool.
        </p>

        {/* TAGS */}
        <div className="mt-6 flex gap-4 flex-wrap">
          <span className="text-sm px-3 py-1 border border-gray-300 rounded-full hover:border-red-600 hover:text-red-600 transition">
            Web Developer
          </span>
          <span className="text-sm px-3 py-1 border border-gray-300 rounded-full hover:border-red-600 hover:text-red-600 transition">
            Laravel
          </span>
          <span className="text-sm px-3 py-1 border border-gray-300 rounded-full hover:border-red-600 hover:text-red-600 transition">
            Next.js
          </span>
        </div>

      </motion.div>
    </div>
  );
}
