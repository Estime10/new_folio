'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { IoIosCloseCircle } from 'react-icons/io';
import type { NavigationProps } from '../../../lib/types';

const Navigation = ({
  menuItems,
  accentColor,
  onMenuClick,
  isMobileMenuOpen,
  onToggleMobileMenu,
}: NavigationProps) => {
  const handleMenuClick = (color: string, id: number) => {
    onMenuClick(color, id);
    onToggleMobileMenu();
  };

  return (
    <>
      {/* Menu Desktop */}
      <motion.div
        className="hidden lg:block fixed right-12 top-[250px] z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.nav
          className="flex flex-col gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {menuItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              className="text-white text-2xl font-bold uppercase flex items-center justify-end hover:scale-110 transition-transform duration-300 ease-in-out w-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1 + i * 0.2,
                ease: 'easeOut',
              }}
              onClick={() => onMenuClick(item.color, item.id)}
              style={{
                color: accentColor === item.color ? item.color : 'white',
                transition: 'color 0.5s',
              }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>
      </motion.div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-95 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* En-tête du menu mobile */}
            <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 -mt-14">
              {/* Logo */}
              <div className="relative w-60 h-60 -left-14">
                <Image
                  src="/images/logo_2.png"
                  alt="Logo"
                  className="object-contain"
                  priority
                  fill
                />
              </div>

              {/* Bouton de fermeture */}
              <motion.button
                className="text-white p-2 -mt-8"
                onClick={onToggleMobileMenu}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 180 }}
                exit={{ opacity: 0, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              >
                <IoIosCloseCircle className="text-4xl -mr-2" />
              </motion.button>
            </div>

            <motion.nav
              className="flex flex-col items-center justify-start h-full gap-8 pt-[400px]"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className="text-white text-4xl transition-colors font-bold uppercase"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.1,
                  }}
                  onClick={() => handleMenuClick(item.color, item.id)}
                  style={{
                    color: accentColor === item.color ? item.color : 'white',
                    transition: 'color 0.5s',
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
