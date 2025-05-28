'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { RxSlash } from 'react-icons/rx';
import { SiGmail } from 'react-icons/si';
import { TiThMenu } from 'react-icons/ti';

const menuItems = [
  { id: 1, label: 'About', href: '#about' },
  { id: 2, label: 'Projects', href: '#projects' },
  { id: 3, label: 'Contact', href: '#contact' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const headerGroupVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const bottomGroupVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.5, // Délai pour apparaître après le header
    },
  },
};

const menuItemVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 1 + i * 0.2, // Commence après les éléments du bas
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

export const HomeScreen = () => {
  return (
    <motion.main
      className="min-h-screen bg-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
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
          <h1 className="font-playfair text-5xl text-[#E40037] font-bold text-center uppercase">
            <span className="text-primary text-[#fff]">Estime</span>
          </h1>
          <h1 className="font-playfair text-5xl text-[#E40037] font-bold text-center mt-2 uppercase">
            Vangu
          </h1>
        </motion.div>

        {/* Menu Icon (visible uniquement sur mobile) */}
        <motion.div
          className="lg:hidden"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <TiThMenu className="text-white text-4xl" />
        </motion.div>
      </motion.header>

      {/* Image Centrale */}
      <motion.div className="h-screen flex items-center justify-center" variants={imageVariants}>
        {/* Contenu Mobile (visible uniquement sur mobile) */}
        <motion.div
          className="lg:hidden absolute top-44 left-0 right-0 flex flex-col items-center z-10"
          variants={bottomGroupVariants}
        >
          <h1 className="font-playfair text-4xl text-[#E40037] font-bold text-center uppercase">
            <span className="text-primary text-[#fff]">Estime</span> Vangu
          </h1>
          <p className="text-[#E40037] text-4xl font-bold text-center mt-4 uppercase">
            <span className="font-bold text-white">Web</span>
            <RxSlash className="inline-block mx-0 text-[#E40037] w-8 h-8 -mt-1" />
            <span className="font-bold text-white">App</span> Developer
          </p>
        </motion.div>

        <motion.div
          className="relative w-[650px] h-[650px] lg:w-[800px] lg:h-[800px] mt-[405px] lg:mt-[255px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-[#E40037] blur-3xl opacity-50 rounded-full overflow-hidden mt-[100px]"
            // animate={{
            //   scale: [0.7, 0.9, 0.7],
            //   opacity: [0.5, 0.7, 0.5],
            // }}
            // transition={{
            //   duration: 4,
            //   repeat: Infinity,
            //   ease: 'easeInOut',
            // }}
          />
          <Image
            src="/images/me.png"
            alt="Image principale"
            fill
            className="object-cover rounded-lg shadow-xl"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Professions (visible uniquement sur desktop) */}
      <motion.div
        className="hidden lg:block fixed bottom-10 left-10 gap-4 text-center"
        variants={bottomGroupVariants}
      >
        <p className="text-[#E40037] text-4xl font-bold uppercase">
          <span className="font-bold text-white">Web</span>
          <RxSlash className="inline-block mx-0 text-[#E40037] w-10 h-10 -mt-1" />
          <span className="font-bold text-white">App</span>
        </p>
        <p className="text-[#E40037] text-4xl font-bold mt-2 uppercase">Developer</p>
      </motion.div>

      {/* Menu Navigation (visible uniquement sur desktop) */}
      <motion.div className="hidden lg:block fixed -right-10 top-[210px]">
        <nav className="flex flex-col justify-between h-[550px]">
          {menuItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              className="text-white text-3xl hover:text-[#E40037] transition-colors transform rotate-90 origin-left font-bold uppercase w-32 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1, x: 10 }}
              transition={{ duration: 0.3 }}
              custom={i}
              variants={menuItemVariants}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>

      {/* Icônes sociales (visible uniquement sur desktop) */}
      <motion.div
        className="hidden lg:flex fixed bottom-10 right-10 gap-4"
        variants={bottomGroupVariants}
      >
        <div className="flex gap-4">
          <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
            <FaInstagram className="text-[#fff] text-6xl hover:text-[#E40037] transition-colors cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
            <FaLinkedin className="text-[#fff] text-6xl hover:text-[#E40037] transition-colors cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, y: -5 }} transition={{ duration: 0.3 }}>
            <SiGmail className="text-[#fff] text-6xl hover:text-[#E40037] transition-colors cursor-pointer" />
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
};
