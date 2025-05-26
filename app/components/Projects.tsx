"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projectData = [
  {
    title: "Debunkr",
    description: "A Filipino fake news classifier built with SvelteKit and Python NLP models. I primarily contributed to the branding and interface design of the platform, ensuring a clean, intuitive, and trustworthy user experience.",
    techStack: "SvelteKit, FastAPI, Scikit-learn, LIME, Figma",
    image: "/debunkr.jpg",
    link: "https://github.com/yourusername/debunkr",
    overlayText: "Visit GitHub Repo",
  },
  {
    title: "Kantonize",
    description: "A SaaS platform that allows users to customize their Pancit Canton according to their preferences. Built with Next.js and Tailwind CSS, it offers an interactive interface for ingredient selection and community engagement.",
    techStack: "Next.js, Tailwind CSS, Framer Motion, TypeScript",
    image: "/kantonize.jpg",
    link: "https://kantonize.vercel.app/",
    overlayText: "Visit Site",
  },
  {
    title: "IPSync",
    description:"A web platform designed to streamline internship and project collaborations, connecting students with companies and organizations for seamless IP matching and management.",
    techStack: "Next.js, Tailwind CSS, Firebase, Node.js",
    image: "/ipsync.jpg", 
    link: "https://ipsync.vercel.app/",
    overlayText: "Visit Website",
  },
  {
    title: "PyroCapture",
    description:"An eco-friendly CO₂ capture device prototype designed in Figma, showcasing AI-powered monitoring and real-time emission insights for sustainable carbon capture.",
    techStack: "Figma",
    image: "/pyrocapture.jpg",
    link: "https://www.figma.com/proto/otxZk2nLJoeDdEBGF80Q97/PyroCapture-Prototype?node-id=116-58&t=Jy6ALuQFGWsyMVK9-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=112%3A6&show-proto-sidebar=1",
    overlayText: "View Prototype",
  }

];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      id="projects"
      className="pt-0 pb-20 text-white"
      style={{ fontFamily: "'Poppins Regular', sans-serif" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-pink-400 mb-10 text-center"
          style={{ fontFamily: "'Poppins SemiBold', sans-serif" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map(({ title, description, techStack, image, link, overlayText }, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  scale: isHovered ? 1.03 : 1,
                  y: isHovered ? -5 : 0,
                  filter: isHovered
                    ? "drop-shadow(0 10px 10px rgba(236, 72, 153, 0.5))"
                    : "drop-shadow(0 10px 10px rgba(236, 72, 153, 0))",
                  transition: { duration: 0.3 },
                }}
                onClick={() => {
                  if (link) window.open(link, "_blank");
                }}
              >
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                  />

                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex justify-center items-center text-pink-400 font-semibold text-lg select-none"
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)", // darker background for contrast
                        backdropFilter: "blur(5px)",
                        WebkitBackdropFilter: "blur(5px)",
                        textShadow: "0 0 5px rgba(0,0,0,0.8)", // subtle text shadow
                      }}
                    >
                      {overlayText || "Visit Link"}
                    </motion.div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 text-pink-300">{title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{description}</p>
                  <div className="text-xs text-gray-400">
                    {techStack.split(", ").map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block bg-gray-800 text-pink-400 px-2 py-1 mr-1 rounded-md mb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
