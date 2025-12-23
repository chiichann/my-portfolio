"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

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
      transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.1 }}
      className="ml-6 md:ml-24 cursor-pointer bg-transparent border-none text-xl text-[#FD50B9] leading-none"
      style={{ fontFamily: "'Poppins Black', sans-serif" }}
      aria-label="Scroll to hero"
      initial={{ y: -40, opacity: 0, rotate: -5, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
    >
      riri.
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
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -15, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 18,
    },
  },
};

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [underlineProps, setUnderlineProps] = useState<{ left: number; width: number } | null>(null);
  const [hovered, setHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -80,
        opacity: isVisible ? 1 : 0,
        backgroundColor: "rgba(0,0,0,1)",
      }}
      transition={{
        y: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, ease: "easeInOut" },
      }}
      className="w-full h-20 sticky top-0 z-50 bg-black"
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
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
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: hovered ? 1 : 0.3, opacity: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </AnimatePresence>
          )}
        </motion.ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            whileHover={{ rotate: 20, scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {mobileMenuOpen ? (
              <motion.div
                key="x-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="heart-icon"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <Heart size={26} className="text-[#FD50B9]" />
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-full bg-black z-40 px-6 pb-6 border-t border-[#FD50B9]"
          >
            <motion.ul
              className="flex flex-col gap-y-4 mt-4"
              style={{ fontFamily: "'Poppins Regular', sans-serif" }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {navItems.map(({ href, label }) => (
                <motion.li
                  key={href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a
                    href={href}
                    className="text-white hover:text-[#FD50B9] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
