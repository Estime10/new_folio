'use client';

import { motion } from 'framer-motion';
import type { NavigationProps } from '../../../lib/types';

const Navigation = ({ menuItems, accentColor, onMenuClick }: NavigationProps) => {
  return (
    <motion.div
      className="hidden lg:block fixed right-10 top-[250px] z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.nav
        className="flex flex-col h-[480px] items-end gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {menuItems.map((item, i) => (
          <motion.a
            key={item.id}
            href={item.href}
            className="text-white text-2xl transition-colors origin-left font-bold uppercase w-32 h-10 flex items-center justify-center hover:scale-110"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1 + i * 0.2,
              ease: 'easeOut',
            }}
            whileHover={{ scale: 1.1, x: 10 }}
            onClick={() => onMenuClick(item.color)}
            style={{
              color: accentColor === item.color ? item.color : 'white',
              transition: 'color 0.5s',
              transform: 'rotate(90deg)',
              transformOrigin: 'left',
            }}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.nav>
    </motion.div>
  );
};

export default Navigation;
