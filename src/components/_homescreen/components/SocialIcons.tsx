'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { bottomGroupVariants } from '../../../lib/animations';
import type { SocialIconsProps } from '../../../lib/types';

const SocialIcons = ({ accentColor }: SocialIconsProps) => {
  return (
    <>
      <motion.div
        className="hidden lg:flex fixed bottom-10 right-10 gap-4"
        variants={bottomGroupVariants}
      >
        <div className="flex gap-10">
          <motion.a
            href="https://www.instagram.com/10davinchatcode?utm_source=qr&igsh=MThxYjNrdHpmZ3R6dw=="
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div animate={{ color: accentColor }} transition={{ duration: 0.5 }}>
              <FaInstagram
                className="text-6xl transition-colors cursor-pointer"
                style={{ color: accentColor }}
              />
            </motion.div>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/estime-vangu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div animate={{ color: accentColor }} transition={{ duration: 0.5 }}>
              <FaLinkedin
                className="text-6xl transition-colors cursor-pointer"
                style={{ color: accentColor }}
              />
            </motion.div>
          </motion.a>
          <motion.a
            href="https://wa.me/32484030668"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div animate={{ color: accentColor }} transition={{ duration: 0.5 }}>
              <FaWhatsapp
                className="text-6xl transition-colors cursor-pointer"
                style={{ color: accentColor }}
              />
            </motion.div>
          </motion.a>
          <motion.a
            href="mailto:estimedev10@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div animate={{ color: accentColor }} transition={{ duration: 0.5 }}>
              <SiGmail
                className="text-6xl transition-colors cursor-pointer"
                style={{ color: accentColor }}
              />
            </motion.div>
          </motion.a>
        </div>
      </motion.div>

      <div className="lg:hidden flex justify-center gap-10 mt-4">
        <a
          href="https://www.instagram.com/10davinchatcode?utm_source=qr&igsh=MThxYjNrdHpmZ3R6dw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="text-6xl transition-colors cursor-pointer"
            style={{ color: accentColor }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/estime-vangu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-6xl transition-colors cursor-pointer"
            style={{ color: accentColor }}
          />
        </a>
        <a href="https://wa.me/32484030668" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp
            className="text-6xl transition-colors cursor-pointer"
            style={{ color: accentColor }}
          />
        </a>
        <a href="mailto:estimedev10@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail
            className="text-6xl transition-colors cursor-pointer"
            style={{ color: accentColor }}
          />
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
