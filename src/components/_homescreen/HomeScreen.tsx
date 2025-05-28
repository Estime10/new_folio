'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { containerVariants } from './components/animations';
import {
  CentralImage,
  Header,
  Navigation,
  Profession,
  SocialIcons,
} from './components/ClientComponents';

const menuItems = [
  { id: 1, label: 'About', href: '#about', color: '#E40037' },
  { id: 2, label: 'Projects', href: '#projects', color: '#0066FF' },
  { id: 3, label: 'Contact', href: '#contact', color: '#00C896' },
];

export const HomeScreen = () => {
  const [accentColor, setAccentColor] = useState('#E40037');

  const handleMenuClick = (color: string) => {
    setAccentColor(color);
  };

  return (
    <motion.main
      className="min-h-screen bg-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Header accentColor={accentColor} />
        <CentralImage accentColor={accentColor} />
        <Profession accentColor={accentColor} />
        <Navigation menuItems={menuItems} accentColor={accentColor} onMenuClick={handleMenuClick} />
        <SocialIcons accentColor={accentColor} />
      </motion.div>
    </motion.main>
  );
};
