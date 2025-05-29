'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { containerVariants } from '../../lib/animations';
import {
  CentralImage,
  Header,
  Navigation,
  Profession,
  SocialIcons,
} from './components/ClientComponents';

const menuItems = [
  { id: 1, label: 'Home', href: '#home', color: '#E40037' },
  { id: 2, label: 'About', href: '#about', color: '#6C00FF' },
  { id: 3, label: 'Projects', href: '#projects', color: '#0066FF' },
  { id: 4, label: 'Contact', href: '#contact', color: '#00C896' },
];

export const HomeScreen = () => {
  const [accentColor, setAccentColor] = useState('#E40037');
  const [isHome, setIsHome] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (color: string, id: number) => {
    setAccentColor(color);
    setIsHome(id === 1);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.main
      className="min-h-screen bg-black overflow-hidden fixed inset-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-full w-full"
      >
        <Header accentColor={accentColor} onToggleMobileMenu={toggleMobileMenu} />
        <CentralImage accentColor={accentColor} showImage={isHome} />
        {isHome && (
          <>
            <Profession accentColor={accentColor} />
            <SocialIcons accentColor={accentColor} />
          </>
        )}
        <Navigation
          menuItems={menuItems}
          accentColor={accentColor}
          onMenuClick={handleMenuClick}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={toggleMobileMenu}
        />
      </motion.div>
    </motion.main>
  );
};
