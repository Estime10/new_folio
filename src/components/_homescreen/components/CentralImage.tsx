'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { RxSlash } from 'react-icons/rx';
import { bottomGroupVariants, imageVariants } from '../../../lib/animations';
import type { CentralImageProps } from '../../../lib/types';

const CentralImage = ({ accentColor }: CentralImageProps) => {
  return (
    <motion.div className="h-screen flex items-center justify-center" variants={imageVariants}>
      {/* Contenu Mobile (visible uniquement sur mobile) */}
      <motion.div
        className="lg:hidden absolute top-44 left-0 right-0 flex flex-col items-center z-10"
        variants={bottomGroupVariants}
      >
        <h1 className="font-playfair text-3xl font-bold text-center uppercase">
          <span className="text-primary text-[#fff]">Estime</span>
          <motion.span
            style={{ color: accentColor }}
            animate={{ color: accentColor }}
            transition={{ duration: 0.5 }}
          >
            {' '}
            Vangu
          </motion.span>
        </h1>
        <p className="text-3xl font-bold text-center mt-4 uppercase">
          <span className="font-bold text-white">Web</span>
          <motion.span
            className="inline-block mx-0 w-8 h-8 -mt-1"
            style={{ color: accentColor }}
            animate={{ color: accentColor }}
            transition={{ duration: 0.5 }}
          >
            <RxSlash className="mt-2 mx-[2px]" />
          </motion.span>
          <span className="font-bold text-white">App</span>{' '}
          <span className="text-[#E40037]">Developer</span>
        </p>
      </motion.div>

      <motion.div
        className="relative
        w-[400px] h-[400px]
        md:w-[500px] md:h-[500px]
        lg:w-[600px] lg:h-[600px]
        mt-[470px]
        md:mt-[630px]
        lg:mt-[350px]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 blur-3xl opacity-50 rounded-full overflow-hidden mt-[100px] lg:mt-[100px] w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
          style={{ backgroundColor: accentColor }}
          animate={{ backgroundColor: accentColor }}
          transition={{ duration: 0.5 }}
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
  );
};

export default CentralImage;
