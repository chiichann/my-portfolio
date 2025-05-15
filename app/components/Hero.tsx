"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const waveVariants = {
  wave: {
    rotate: [0, 25, -25, 25, -25, 0],
    scale: [1, 1.2, 1, 1.2, 1, 1],
    transition: {
      duration: 4,
      times: [0, 0.15, 0.4, 0.65, 0.9, 1],
      ease: "easeInOut",
      repeat: 0,
    },
  },
  still: { rotate: 0, scale: 1 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.6,
    },
  },
};

const bounceUpVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.8,
    },
  },
};

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("wave");
  }, [controls]);

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row justify-center items-start pt-16 md:pt-24 px-8 md:px-24 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex-[2] flex flex-col items-start md:items-start mb-8 md:mb-0 pr-8"
        variants={containerVariants}
      >
        <motion.div
          className="text-lg md:text-xl mb-2 flex items-center gap-2"
          variants={bounceUpVariants}
        >
          <motion.span
            className="w-5 h-5 inline-block"
            variants={waveVariants}
            initial="still"
            animate={controls}
            onAnimationComplete={() => controls.start("still")}
          >
            <Image
              src="/waving-hand.png"
              alt="waving hand"
              width={20}
              height={20}
              priority={false}
              style={{ display: "inline-block" }}
            />
          </motion.span>
          Hello there! I am
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-5"
          style={{
            color: "#FD50B9",
            fontFamily: "'Poppins Black', sans-serif",
          }}
          variants={bounceUpVariants}
        >
          Cherilyn Marie Deocampo
        </motion.h1>

        <motion.p
          className="max-w-xl text-base md:text-lg mb-7"
          variants={bounceUpVariants}
        >
          Designing intuitive, user-first digital experiences through clean code
          and thoughtful design. Currently pursuing a Computer Science degree,
          with a focus on front-end development and scalable design systems.
        </motion.p>

        <motion.div className="flex gap-6" variants={bounceUpVariants}>
          <a
            href="#projects"
            className="px-6 py-3 bg-[#FD50B9] rounded-md font-semibold hover:bg-pink-600 transition flex items-center gap-2"
          >
            Explore My Work
            <Image src="/arrowdown.png" alt="Arrow down" width={16} height={24} />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#FD50B9] text-[#FD50B9] rounded-md font-semibold hover:bg-[#FD50B9] hover:text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        variants={bounceUpVariants}
      >
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg relative">
          <Image
            src="/profile.png"
            alt="Cherilyn Marie Deocampo"
            fill
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
