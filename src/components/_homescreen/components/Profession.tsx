'use client';

import { motion } from 'framer-motion';
import { RxSlash } from 'react-icons/rx';
import { bottomGroupVariants } from '../../../lib/animations';
import type { ProfessionProps } from '../../../lib/types';

const Profession = ({ accentColor }: ProfessionProps) => {
  return (
    <motion.div
      className="hidden lg:block fixed bottom-10 left-10 gap-4 text-center"
      variants={bottomGroupVariants}
    >
      <p className="text-4xl font-bold uppercase">
        <span className="font-bold text-white">Web</span>
        <motion.span
          className="inline-block mx-0 w-10 h-10 -mt-1"
          style={{ color: accentColor }}
          animate={{ color: accentColor }}
          transition={{ duration: 0.5 }}
        >
          <RxSlash className="mt-2 ml-1" />
        </motion.span>
        <span className="font-bold text-white">App</span>
      </p>
      <motion.p
        className="text-4xl font-bold mt-2 uppercase"
        style={{ color: accentColor }}
        animate={{ color: accentColor }}
        transition={{ duration: 0.5 }}
      >
        Developer
      </motion.p>
    </motion.div>
  );
};

export default Profession;
