"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Logo: React.FC = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToHero}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="ml-24 cursor-pointer bg-transparent border-none"
      style={{ fontFamily: "'Poppins Black', sans-serif" }}
    >
      <div className="text-xl text-[#FD50B9] leading-none">
        <span>riri.</span>
      </div>
    </motion.button>
  );
};

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About Me" },
  { href: "#contact", label: "Contact" },
];

const navListVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [underlineProps, setUnderlineProps] = useState<{ left: number; width: number } | null>(null);
  const [hovered, setHovered] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Underline animation handlers
  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();
    if (!navRect) return;
    setUnderlineProps({
      left: rect.left - navRect.left,
      width: rect.width,
    });
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTimeout(() => {
      setUnderlineProps(null);
    }, 300);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        y: isVisible ? 0 : -80,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isVisible ? "rgba(0,0,0,1)" : "rgba(0,0,0,0)",
      }}
      transition={{
        y: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, ease: "easeInOut" },
        backgroundColor: { duration: 0.6, ease: "easeInOut" },
      }}
      className="w-full h-20 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
        >
          <Logo />
        </motion.div>
        <motion.ul
          ref={navRef}
          className="relative hidden md:flex gap-x-10 mr-24"
          style={{ fontFamily: "'Poppins Regular', sans-serif" }}
          onMouseLeave={handleMouseLeave}
          initial="hidden"
          animate="visible"
          variants={navListVariants}
        >
          {navItems.map(({ href, label }) => (
            <motion.li key={href} className="relative" variants={navItemVariants}>
              <a href={href} className="text-white" onMouseEnter={handleMouseEnter}>
                {label}
              </a>
            </motion.li>
          ))}
          {underlineProps && (
            <AnimatePresence>
              <motion.span
                key="underline"
                layoutId="underline"
                className="absolute bottom-0 h-[2px] bg-[#FD50B9] rounded"
                style={{
                  left: underlineProps.left,
                  width: underlineProps.width,
                  transformOrigin: "center",
                }}
                initial={{ scaleX: 0.3, opacity: 1 }}
                animate={{ scaleX: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </AnimatePresence>
          )}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
