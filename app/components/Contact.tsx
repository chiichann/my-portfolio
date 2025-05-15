'use client';

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Contact = () => {
  const email = 'cherilynmarie.deocampo@wvsu.edu.ph';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
    });
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-5xl mx-auto bg-[#0f0f0f] text-center text-white"
      style={{ fontFamily: "'Poppins Regular', sans-serif" }}
    >
      <h2
        className="text-4xl font-bold text-pink-400 mb-6"
        style={{ fontFamily: "'Poppins SemiBold', sans-serif" }}
      >
        {"Let Us Work Together!"}
      </h2>
      <p className="text-lg mb-8 text-gray-300 max-w-xl mx-auto">
        Open for collaborations, freelance design/dev work, or just to connect.
      </p>

      <div
        className="inline-block mb-12 cursor-pointer group"
        onClick={handleCopyEmail}
        aria-label={`Copy email address ${email}`}
      >
        <span className="inline-block text-white text-xl font-semibold underline select-none group-hover:text-pink-400 transition-colors duration-300">
          {email}
        </span>
      </div>

      <div className="flex justify-center gap-10 text-pink-400 text-3xl max-w-xs mx-auto pb-15">
        <a
          href="https://www.linkedin.com/in/cherilyn-marie-deocampo-464938337/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-pink-600 transition-colors"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.facebook.com/cherilynmarie.deocampo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-pink-600 transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/_cherxlynn/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-600 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/chiichann"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-pink-600 transition-colors"
        >
          <FaGithub />
        </a>
      </div>

      {copied && (
        <div
          className="fixed bg-pink-600/90 text-white px-6 py-3 rounded shadow-lg text-sm whitespace-nowrap z-50 animate-fadeInOut text-center"
          role="alert"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          📧 Email copied! I will be looking forward to your message.
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          90% {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
        }
        .animate-fadeInOut {
          animation: fadeInOut 3s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
