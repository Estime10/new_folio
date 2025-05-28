'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TiThMenu } from 'react-icons/ti';
import { headerGroupVariants } from './animations';
import type { HeaderProps } from './types';

const Header = ({ accentColor }: HeaderProps) => {
  return (
    <motion.header
      className="fixed -top-10 lg:-top-24 left-0 right-0 px-4 flex justify-between items-center lg:px-10 lg:py-10"
      variants={headerGroupVariants}
    >
      {/* Logo */}
      <motion.div
        className="relative w-60 h-60 lg:w-80 lg:h-80 -left-14 lg:-left-22"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src="/images/logo_2.png" alt="Logo" className="object-contain" priority fill />
      </motion.div>

      {/* Nom et Prénom (visible uniquement sur desktop) */}
      <motion.div className="hidden lg:flex flex-col items-center" variants={headerGroupVariants}>
        <h1 className="font-playfair text-5xl font-bold text-center uppercase">
          <span className="text-primary text-[#fff]">Estime</span>
        </h1>
        <motion.h1
          className="font-playfair text-5xl font-bold text-center mt-2 uppercase"
          style={{ color: accentColor }}
          animate={{ color: accentColor }}
          transition={{ duration: 0.5 }}
        >
          Vangu
        </motion.h1>
      </motion.div>

      {/* Menu Icon (visible uniquement sur mobile) */}
      <motion.div className="lg:hidden" whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
        <TiThMenu className="text-white text-4xl" />
      </motion.div>
    </motion.header>
  );
};

export default Header;
