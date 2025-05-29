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
        className="flex flex-col gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {menuItems.map((item, i) => (
          <motion.a
            key={item.id}
            href={item.href}
            className="text-white text-2xl transition-colors font-bold uppercase flex items-center justify-start hover:scale-110 w-full"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1 + i * 0.2,
              ease: 'easeOut',
            }}
            whileHover={{ scale: 1.1, x: 10 }}
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
  );
};

export default Navigation;
