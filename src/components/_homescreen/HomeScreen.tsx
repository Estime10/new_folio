'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { containerVariants } from '../../lib/animations';
import {
  CentralImage,
  Header,
  Navigation,
  Profession,
  SocialIcons,
} from './components/ClientComponents';
import AboutCard from './components/sections/about_section/AboutCard';
import ProjectCard from './components/sections/projects_section/ProjectCard';

const menuItems = [
  { id: 1, label: 'Home', href: '#home', color: '#E40037' },
  { id: 2, label: 'My Stacks', href: '#stacks', color: '#6C00FF' },
  { id: 3, label: 'My Projects', href: '#projects', color: '#39FF14' },
];

export const HomeScreen = () => {
  const [accentColor, setAccentColor] = useState('#E40037');
  const [isHome, setIsHome] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // useEffect(() => {
  //   // Forcer le retour à la page d'accueil lors du rafraîchissement
  //   window.history.replaceState(null, '', window.location.pathname);
  //   setAccentColor(menuItems[0].color);
  //   setIsHome(true);
  //   setActiveSection('home');
  // }, []);

  useEffect(() => {
    // Mettre à jour l'URL lors des changements de section
    if (activeSection !== 'home') {
      window.history.replaceState(null, '', `#${activeSection}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [activeSection]);

  const handleMenuClick = (color: string, id: number) => {
    setAccentColor(color);
    setIsHome(id === 1);
    setActiveSection(id === 1 ? 'home' : id === 2 ? 'stacks' : 'projects');
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
        <CentralImage
          accentColor={accentColor}
          showImage={isHome}
          isHome={isHome}
          activeSection={activeSection}
        />
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

        {/* Sections */}
        <AnimatePresence>
          {activeSection === 'stacks' && <AboutCard accentColor={accentColor} />}
          {activeSection === 'projects' && <ProjectCard accentColor={accentColor} />}
        </AnimatePresence>
      </motion.div>
    </motion.main>
  );
};
