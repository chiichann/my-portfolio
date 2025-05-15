'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  SiGit, SiGithub, SiFigma, SiJavascript, SiPython,
  SiReact, SiNextdotjs, SiHtml5, SiTailwindcss,
  SiCss3, SiCplusplus, SiCanva, SiAdobe
} from 'react-icons/si';

const skillColors: Record<string, string> = {
  Git: '#F05032',
  GitHub: '#8a2be2',
  Figma: '#F24E1E',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  React: '#61DAFB',
  'Next.js': '#bbbbbb',
  HTML5: '#E34F26',
  TailwindCSS: '#38B2AC',
  CSS3: '#1572B6',
  'C++': '#00599C',
  Canva: '#00C4CC',
  'Adobe Lightroom': '#31A8FF',
};

const skills = [
  { icon: SiGit, name: 'Git' },
  { icon: SiGithub, name: 'GitHub' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiPython, name: 'Python' },
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiHtml5, name: 'HTML5' },
  { icon: SiTailwindcss, name: 'TailwindCSS' },
  { icon: SiCss3, name: 'CSS3' },
  { icon: SiCplusplus, name: 'C++' },
  { icon: SiCanva, name: 'Canva' },
  { icon: SiAdobe, name: 'Adobe Lightroom' },
];

const duplicatedSkills = [...skills, ...skills];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (isHovered) {
      animationControls.stop();
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth / 2;
    const speed = 40; // pixels per second
    const duration = scrollWidth / speed;

    const animate = async () => {
      if (direction === 1) {
        await animationControls.start({
          x: -scrollWidth,
          transition: { duration, ease: 'linear' },
        });
        setDirection(-1);
      } else {
        await animationControls.start({
          x: 0,
          transition: { duration, ease: 'linear' },
        });
        setDirection(1);
      }
    };

    animate();
  }, [direction, isHovered, animationControls]);

  return (
    <section className="bg-[#0f0f0f] py-24 w-screen overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-10 text-center">
        What I Bring to the Table
      </h2>

      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-[#0f0f0f] w-screen overflow-hidden h-[200px] py-8"
      >
        <motion.div
          className="flex gap-12 will-change-transform min-w-[200%]"
          animate={animationControls}
          initial={{ x: 0 }}
        >
          {duplicatedSkills.map(({ icon: Icon, name }, index) => {
            const glowColor = skillColors[name] || '#fff';
            const iconColor = skillColors[name] || '#fff';
            const verticalOffset = index % 2 === 0 ? 0 : 20;

            return (
              <div
                key={`${name}-${index}`}
                className="relative group flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-white flex-shrink-0 transition-all duration-300 hover:scale-110"
                style={{
                  marginTop: verticalOffset,
                  boxShadow: `0 0 40px 6px transparent`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget.style.boxShadow = `0 0 40px 6px ${glowColor}`);
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 0 40px 6px transparent';
                }}
              >
                <Icon size={48} color={iconColor} />
                <span className="absolute top-[105%] text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}