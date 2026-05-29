import React from "react";
import { motion } from "framer-motion";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex items-center" id="home">
      <div className="w-full flex justify-between items-center px-5 lg:px-28 lg:flex-row flex-col-reverse gap-10 py-10 pt-28 lg:pt-10">

        {/* LEFT */}
        <motion.div
          className="lg:w-[45%] flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col gap-3 lg:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >

            {/* NAME */}
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Hello,{" "}
              <span className="text-red-500 font-extrabold">
                <TypeAnimation
                  sequence={["I am Akhdan Isham", 1500]}
                  speed={20}
                  repeat={Infinity}
                />
              </span>
            </motion.h2>

            {/* ROLE */}
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <span className="font-extrabold text-red-500">Web</span>{" "}
              <span className="font-extrabold text-black">Developer</span>
            </motion.h2>

            {/* LOCATION */}
            <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Based In <span className="font-extrabold text-red-500">Bandung</span>
            </motion.h2>

          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            className="text-gray-500 text-sm lg:text-base mt-6 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I'm a Game Development student with a strong passion for Web Development.
            I build modern websites for real clients and enjoy creating clean,
            high-performance web experiences.
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div
            className="flex items-center gap-x-5 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { Icon: BiLogoGmail, href: "mailto:akhdanisham@gmail.com" },
              { Icon: IoLogoInstagram, href: "https://instagram.com/yorudanzz" },
              { Icon: IoLogoWhatsapp, href: "https://wa.me/6287784216378" },
              { Icon: BsGithub, href: "https://github.com/Yorusaha" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="border border-gray-300 p-3 rounded-full text-gray-600 bg-white"
                whileHover={{
                  scale: 1.1,
                  borderColor: "#ef4444",
                  color: "#ef4444",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="lg:w-[50%] w-full flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="h-[340px] lg:h-[480px] w-auto object-contain"
            src="/assets/me.webp"
            alt="Hero"
          />
        </motion.div>

      </div>
    </div>
  );
}
