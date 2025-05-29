'use client';

import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { bottomGroupVariants } from '../../../lib/animations';
import type { SocialIconsProps } from '../../../lib/types';

const SocialIcons = ({ accentColor }: SocialIconsProps) => {
  return (
    <motion.div
      className="hidden lg:flex fixed bottom-10 right-10 gap-4"
      variants={bottomGroupVariants}
    >
      <div className="flex gap-4">
        <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
          <motion.div animate={{ color: accentColor }} transition={{ duration: 0.5 }}>
            <FaInstagram
              className="text-6xl transition-colors cursor-pointer"
              style={{ color: accentColor }}
            />
          </motion.div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
          <motion.div animate={{ color: accentColor }} transition={{ duration: 0.5 }}>
            <FaLinkedin
              className="text-6xl transition-colors cursor-pointer"
              style={{ color: accentColor }}
            />
          </motion.div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
          <motion.div animate={{ color: accentColor }} transition={{ duration: 0.5 }}>
            <SiGmail
              className="text-6xl transition-colors cursor-pointer"
              style={{ color: accentColor }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialIcons;
