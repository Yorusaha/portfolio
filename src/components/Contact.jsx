import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialLinks = [
    { Icon: BiLogoGmail, href: "mailto:akhdanisham@gmail.com" },
    { Icon: IoLogoInstagram, href: "https://instagram.com/yorudanzz" },
    { Icon: IoLogoWhatsapp, href: "https://wa.me/6287784216378" },
    { Icon: BsGithub, href: "https://github.com/Yorusaha" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='bg-white text-black lg:my-20 my-10 lg:px-28 px-5 py-10'
      id='contact'
    >

      {/* TITLE */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        className='text-3xl lg:text-5xl text-center mb-10 font-bold'
      >
        Contact{" "}
        <span className='text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]'>
          Me
        </span>
      </motion.h2>

      <div className='flex justify-between items-center flex-col lg:flex-row gap-10'>

        {/* FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          className='lg:w-[40%] w-full'
        >
          <form className='space-y-4'>

            <input
              className='bg-white border border-gray-300 px-5 py-3 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600'
              type="text"
              placeholder='Your name'
              required
            />

            <input
              className='bg-white border border-gray-300 px-5 py-3 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600'
              type="email"
              placeholder='Email'
              required
            />

            <input
              className='bg-white border border-gray-300 px-5 py-3 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600'
              type="text"
              placeholder='Your website (optional)'
            />

            <textarea
              className='bg-white border border-gray-300 px-5 py-3 h-32 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600 resize-none'
              placeholder='How can I help?'
            />

            {/* BUTTON + SOCIAL */}
            <div className='flex flex-col lg:flex-row gap-4 mt-4'>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className='bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold shadow-[0_0_10px_rgba(239,68,68,0.3)]'
              >
                Get In Touch
              </motion.button>

              <div className='flex gap-3'>
                {socialLinks.map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="border border-gray-300 p-3 rounded-full text-gray-600"
                    whileHover={{
                      scale: 1.2,
                      borderColor: "#ef4444",
                      color: "#ef4444",
                      boxShadow: "0 0 10px rgba(239,68,68,0.4)"
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

            </div>
          </form>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          className='lg:w-1/2'
        >

          <h2 className='text-3xl lg:text-5xl font-bold'>
            Let's <span className='text-red-600'>talk</span>
          </h2>

          <p className='text-gray-500 mt-6 text-sm lg:text-base leading-relaxed'>
            I love building modern applications and pushing creativity to the next level.
            Let's collaborate and create something amazing together.
          </p>

          {/* CONTACT INFO */}
          <div className='mt-8 space-y-4 text-sm lg:text-lg'>

            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:akhdanisham@gmail.com"
              className='flex items-center gap-3 group'
            >
              <span className='border border-gray-300 p-2 rounded-full group-hover:bg-red-600 group-hover:text-white transition'>
                <IoMdMail />
              </span>
              akhdanisham@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="tel:087784216378"
              className='flex items-center gap-3 group'
            >
              <span className='border border-gray-300 p-2 rounded-full group-hover:bg-red-600 group-hover:text-white transition'>
                <FaPhone />
              </span>
              087784216378
            </motion.a>

          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
