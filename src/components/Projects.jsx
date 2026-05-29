import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const clientProjects = [
  {
    id: 1,
    title: "officialmazdajakarta.com",
    tier: "Basic",
    image: "/assets/webclient1.webp",
    description: "Mazda Jakarta dealer website with complete model listings, pricing information, and WhatsApp integration.",
    link: "https://officialmazdajakarta.com",
  },
  {
    id: 2,
    title: "hargamazda.com",
    tier: "Pro",
    image: "/assets/webclient2.webp",
    description: "Pro tier Mazda dealer website with full technical SEO implementation, schema markup, sitemap, robots.txt, complete vehicle catalog, and lead generation features.",
    link: "https://hargamazda.com",
  },
  {
    id: 3,
    title: "officialmazdabintaro.com",
    tier: "Pro",
    image: "/assets/webclient3.webp",
    description: "Official Mazda Bintaro pro tier website with full technical SEO implementation, schema markup, 25+ car models, price lists, and SEO score 95/100.",
    link: "https://officialmazdabintaro.com",
  },
  {
    id: 4,
    title: "mazdabogorcenter.com",
    tier: "Basic",
    image: "/assets/webclient4.webp",
    description: "Mazda Bogor Center dealer website with vehicle listings and WhatsApp integration.",
    link: "https://mazdabogorcenter.com",
  },
  {
    id: 5,
    title: "dealermazda-jakarta.com",
    tier: "Pro",
    image: "/assets/webclient5.webp",
    description: "Pro tier Jakarta Mazda dealer website with complete technical SEO, schema markup, sitemap, robots.txt, full vehicle catalog, and lead generation features.",
    link: "https://dealermazda-jakarta.com",
  },
  {
    id: 6,
    title: "mazdabogorofficial.com",
    tier: "Basic",
    image: "/assets/webclient6.webp",
    description: "Mazda Bogor Official dealer website with vehicle showcase and WhatsApp integration.",
    link: "https://mazdabogorofficial.com",
  },
  {
    id: 7,
    title: "officialmazdabogor.com",
    tier: "Basic",
    image: "/assets/webclient7.webp",
    description: "Official Mazda Bogor dealer website with complete showroom information and contact integration.",
    link: "https://officialmazdabogor.com",
  },
  {
    id: 8,
    title: "mazdajkt.com",
    tier: "Basic",
    image: "/assets/webclient8.webp",
    description: "Mazda Jakarta dealer website with vehicle listings and promotional content.",
    link: "https://mazdajkt.com",
  },
];

const personalProjects = [
  {
    id: 1,
    title: "Aim Creativity Studio",
    image: "/assets/webprojectstudio.webp",
    description: "Creative studio portfolio website showcasing web development services and projects built with modern tech stack.",
    link: "https://aimcreativity.netlify.app",
  },
  {
    id: 2,
    title: "NVRE E-Commerce",
    image: "/assets/ecommerceproject.webp",
    description: "Full-stack fashion e-commerce built with Next.js, React, Tailwind, Framer Motion, and Laravel REST API.",
    link: "https://nvre-ecommerce.vercel.app",
  },
  {
    id: 3,
    title: "SciFi Game 2D",
    image: "/assets/gameproject.webp",
    description: "2D sci-fi platformer shooter built with Godot Engine 4. Features multi-state animation system, parallax background, collectibles, enemies, and complete game loop with health system.",
    link: "https://github.com/Yorusaha/ScifiGame2D-Updated",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const alternatingVariants = {
  hidden: (dir) => ({ opacity: 0, x: dir === "left" ? -60 : 60 }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, type: "spring", stiffness: 70, damping: 12 },
  },
};

export default function Projects() {
  return (
    <div className="bg-white px-5 lg:px-28 py-16 text-black" id="projects">

      {/* ── CLIENT PROJECTS ── */}
      <motion.h2
        className="text-3xl lg:text-5xl text-center mb-4 font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Client{" "}
        <span className="text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]">
          Projects
        </span>
      </motion.h2>

      <motion.p
        className="text-center text-gray-500 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Real websites built for automotive industry clients
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {clientProjects.map((project, i) => (
          <motion.div
            key={project.id}
            className="relative flex flex-col rounded-2xl overflow-hidden border border-gray-200 group bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* TIER BADGE */}
            <span
              className={`absolute top-3 right-3 z-10 text-xs font-bold px-2 py-1 rounded-full ${
                project.tier === "Pro"
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {project.tier}
            </span>

            {/* IMAGE */}
            <div className="relative w-full overflow-hidden" style={{ height: "200px" }}>
              <img
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-90"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col flex-1 p-4 gap-2">
              <p className="font-bold text-sm text-black truncate">{project.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 flex-1">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-600 hover:text-black transition text-xs font-medium pt-1"
              >
                View Project <TbExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── PERSONAL PROJECTS ── */}
      <motion.h2
        className="text-3xl lg:text-5xl text-center mb-4 font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Personal{" "}
        <span className="text-red-600 drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]">
          Projects
        </span>
      </motion.h2>

      <motion.p
        className="text-center text-gray-500 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Side projects built for learning and experimentation
      </motion.p>

      <div className="space-y-16">
        {personalProjects.map((project, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={project.id}
              className={`flex items-center flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10`}
            >
              {/* IMAGE */}
              <motion.div
                className="lg:w-[500px] w-full rounded-2xl overflow-hidden border border-gray-300"
                custom={isLeft ? "left" : "right"}
                variants={alternatingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  className="w-full h-full object-cover transition duration-500 hover:scale-110 hover:brightness-90"
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>

              {/* TEXT */}
              <motion.div
                className="lg:w-1/2 space-y-4"
                custom={isLeft ? "right" : "left"}
                variants={alternatingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-extrabold text-red-600">
                  {String(project.id).padStart(2, "0")}
                </h2>
                <p className="font-bold text-black text-2xl lg:text-3xl">{project.title}</p>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-black transition"
                >
                  View Project <TbExternalLink size={20} />
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
