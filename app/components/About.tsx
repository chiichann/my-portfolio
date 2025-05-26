"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto text-white"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Profile with animated offset box */}
        <motion.div
          className="relative group"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Pink background box behind image */}
          <motion.div
            variants={{
              rest: { x: 12, y: 12 },
              hover: { x: 20, y: 20 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute w-[340px] h-[520px] bg-pink-500 rounded-2xl z-0 shadow-xl"
          />

          {/* Image */}
          <motion.div
            variants={{
              rest: { x: 0, y: 0, scale: 1 },
              hover: { x: -8, y: -8, scale: 1.05 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-[340px] h-[520px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-pink-300 z-10"
          >
            <Image
              src="/about_photo.jpg"
              alt="Cherilyn Marie Deocampo"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pink-400 drop-shadow-sm">
            About Me
          </h2>

          <p className="mb-5 text-lg text-gray-300 leading-relaxed">
            💻 I'm currently pursuing a BS in Computer Science at West Visayas State University,
            with a passion for front-end development and design systems.
          </p>

          <p className="mb-5 text-lg text-gray-300 leading-relaxed">
            🎨 I design and build intuitive user experiences using HTML, CSS, React, and Figma.
            From wireframes to finished UIs, I focus on making digital products both functional and beautiful.
          </p>

          <p className="mb-3 text-lg text-gray-300 font-medium">💡 Right now, I’m:</p>
          <ul className="list-disc list-inside mb-5 text-pink-300 space-y-1 text-base pl-2">
            <li>Mastering React and dynamic UIs</li>
            <li>Exploring design systems for scalable interfaces</li>
            <li>Leveling up my JavaScript for full-stack development</li>
            <li>Championing accessibility in design</li>
          </ul>

          <p className="mb-5 text-lg text-gray-300 leading-relaxed">
            🌸 Beyond coding, I find joy in anime, manga, photography, and spontaneous adventures.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            🚀 What started with curiosity is now a mission: to craft user interfaces that merge
            creativity and clarity, and to keep evolving as a developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
