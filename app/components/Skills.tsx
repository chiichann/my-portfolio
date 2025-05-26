"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  SiGit,
  SiGithub,
  SiFigma,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiCplusplus,
  SiAdobe,
} from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";

const skillColors: Record<string, string> = {
  Git: "#F05032",
  GitHub: "#8a2be2",
  Figma: "#F24E1E",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  React: "#61DAFB",
  "Next.js": "#bbbbbb",
  HTML5: "#E34F26",
  TailwindCSS: "#38B2AC",
  CSS3: "#1572B6",
  "C++": "#00599C",
  "Adobe Lightroom": "#31A8FF",
};

const skills = [
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiPython, name: "Python" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiTailwindcss, name: "TailwindCSS" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiAdobe, name: "Adobe Lightroom" },
];

const duplicatedSkills = [...skills, ...skills];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      opacity: { duration: 0.8, ease: "easeInOut" },
      y: { duration: 0.5 },
      scale: { duration: 0.5 },
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (collapsed) {
      animationControls.stop();
      animationControls.set({ x: 0 });
      return;
    }

    if (isHovered) {
      animationControls.stop();
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;
    const speed = 60;
    const duration = scrollWidth / speed;

    const staggerDelay = 0.05;
    const animationDuration = 0.4;
    const totalItems = duplicatedSkills.length;
    const totalDelayBeforeScroll =
      animationDuration + staggerDelay * (totalItems - 1);

    let isCancelled = false;
    let startTimeout: ReturnType<typeof setTimeout>;

    async function loopAnimation() {
      while (!isCancelled) {
        await animationControls.start({
          x: -scrollWidth,
          transition: { duration, ease: "linear" },
        });

        if (isCancelled) break;

        animationControls.set({ x: 0 });
        await new Promise((res) => setTimeout(res, 1000));
      }
    }

    startTimeout = setTimeout(() => {
      if (!isCancelled) {
        loopAnimation();
      }
    }, totalDelayBeforeScroll * 1000);

    return () => {
      isCancelled = true;
      animationControls.stop();
      clearTimeout(startTimeout);
    };
  }, [animationControls, collapsed, isHovered]);

  const renderSkill = (
    name: string,
    Icon: any,
    index: number,
    keyPrefix = ""
  ) => {
    const color = skillColors[name] || "#fff";
    return (
      <motion.div
        key={`${keyPrefix}-${name}-${index}`}
        variants={itemVariants}
        className="relative group flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-white flex-shrink-0 transition-all duration-300 hover:scale-110"
        style={{ boxShadow: "0 0 40px 6px transparent" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 40px 6px ${color}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 40px 6px transparent";
        }}
      >
        <Icon size={48} color={color} />
        <span className="absolute top-[105%] text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </span>
      </motion.div>
    );
  };

  return (
    <nav id="skills">
      <section className="bg-[#0f0f0f] py-24 w-screen overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-10 text-center">
          What I Bring to the Table
        </h2>

        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              key="scrolling"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="w-screen overflow-hidden h-[200px] py-8"
              ref={containerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="flex gap-12 will-change-transform min-w-[200%]"
                animate={animationControls}
                initial={{ x: 0 }}
              >
                {duplicatedSkills.map(({ icon, name }, i) => {
                  const verticalOffset = i % 2 === 0 ? 0 : 20;
                  return (
                    <motion.div
                      key={`scroll-${name}-${i}`}
                      initial={{ opacity: 0, marginTop: 0 }}
                      animate={{
                        opacity: 1,
                        marginTop: verticalOffset,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: i * 0.05,
                      }}
                    >
                      {renderSkill(name, icon, i, "scroll")}
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {collapsed && (
            <motion.div
              key="collapsed"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-12"
            >
              <div className="flex gap-10 justify-center flex-wrap max-w-4xl mx-auto">
                {skills.map(({ icon, name }, i) =>
                  renderSkill(name, icon, i, "grid")
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          onClick={() => setCollapsed((prev) => !prev)}
          className="mt-12 flex justify-center cursor-pointer select-none"
          animate={{ rotate: collapsed ? 0 : 180 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FiChevronDown
            size={32}
            className="text-pink-400 hover:text-pink-500 transition-colors"
          />
        </motion.div>
      </section>
    </nav>
  );
}
