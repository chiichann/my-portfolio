"use client";

import { motion } from "framer-motion";

const projectData = [
  {
    title: "Portfolio Website",
    description: "A sleek personal website to showcase projects and blogs.",
    techStack: "Next.js, Tailwind CSS, Framer Motion",
    image: "/image_temp.jpg",
  },
  {
    title: "AI Study Bot",
    description: "An AI chatbot that helps with schoolwork using OpenAI's API.",
    techStack: "React, Node.js, OpenAI API",
    image: "/image_temp.jpg",
  },
  {
    title: "E-commerce Dashboard",
    description: "Admin panel for managing products, orders, and analytics.",
    techStack: "React, Redux, Chart.js",
    image: "/image_temp.jpg",
  },
  {
    title: "Emotion Detector",
    description: "Detects real-time facial emotions with Grad-CAM visualizations.",
    techStack: "TensorFlow, Python, OpenCV",
    image: "/image_temp.jpg",
  },
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
          {projectData.map(({ title, description, techStack, image }, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-pink-500/40"
              whileHover={{ scale: 1.03 }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-pink-300">{title}</h3>
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
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
