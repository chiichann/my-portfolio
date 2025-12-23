"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const waveVariants = {
  wave: {
    rotate: [0, 25, -25, 25, -25, 0],
    scale: [1, 1.2, 1, 1.2, 1, 1],
    transition: { duration: 4, times: [0, 0.15, 0.4, 0.65, 0.9, 1], ease: "easeInOut", repeat: 0 },
  },
  still: { rotate: 0, scale: 1 },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5, delayChildren: 0.6 } },
};

const bounceUpVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 25, duration: 0.8 } },
};

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => { controls.start("wave"); }, [controls]);

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center md:items-start pt-16 md:pt-24 px-6 md:px-24 text-white pb-20 sm:pb-32 md:pb-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Side - Text */}
      <motion.div className="flex-[2] flex flex-col items-center md:items-start mb-8 md:mb-0 pr-0 md:pr-8 text-center md:text-left" variants={containerVariants}>
        {/* Greeting */}
        <motion.div className="text-base sm:text-lg mb-2 flex items-center gap-2 justify-center md:justify-start" variants={bounceUpVariants}>
          <motion.span
            className="w-5 h-5 inline-block"
            variants={waveVariants}
            initial="still"
            animate={controls}
            onAnimationComplete={() => controls.start("still")}
          >
            <Image src="/waving-hand.png" alt="waving hand" width={20} height={20} style={{ display: "inline-block" }} />
          </motion.span>
          Hello there! I am
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5"
          style={{ color: "#FD50B9", fontFamily: "'Poppins Black', sans-serif'" }}
          variants={bounceUpVariants}
        >
          Cherilyn Marie Deocampo
        </motion.h1>

        {/* Description */}
        <motion.p className="max-w-md sm:max-w-lg md:max-w-xl text-sm sm:text-base md:text-lg mb-6 md:mb-7" variants={bounceUpVariants}>
          Designing intuitive, user-first digital experiences through clean code and thoughtful design. Currently pursuing a Computer Science degree, focusing on front-end development and scalable design systems.
        </motion.p>

        {/* Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start" variants={bounceUpVariants}>
          {/* Explore My Work - white text, pink border */}
          <a
            href="#projects"
            className="px-5 py-3 border border-[#FD50B9] text-white rounded-md font-semibold hover:bg-[#FD50B9] hover:text-white hover:scale-105 transition transform flex items-center justify-center gap-2"
          >
            Explore My Work
            <Image src="/arrowdown.png" alt="Arrow down" width={16} height={24} />
          </a>

          {/* Download CV - filled pink */}
          <a
            href="/DEOCAMPO_RESUME.docx"
            download
            className="px-5 py-3 bg-[#FD50B9] text-white rounded-md font-semibold hover:bg-pink-600 hover:scale-105 transition transform flex items-center justify-center"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0" variants={bounceUpVariants}>
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg relative">
          <Image src="/profile.png" alt="Cherilyn Marie Deocampo" fill style={{ objectFit: "cover" }} priority={true} />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
