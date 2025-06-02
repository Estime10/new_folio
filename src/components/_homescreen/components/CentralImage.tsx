'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { RxSlash } from 'react-icons/rx';
import { bottomGroupVariants, imagePresenceVariants, imageVariants } from '../../../lib/animations';
import type { CentralImageProps } from '../../../lib/types';
import SocialIcons from './SocialIcons';

const CentralImage = ({ accentColor, showImage, isHome }: CentralImageProps) => {
  return (
    <motion.div className="h-screen flex items-center justify-center" variants={imageVariants}>
      {/* Contenu Mobile (visible uniquement sur mobile) */}
      {isHome && (
        <motion.div
          className="lg:hidden absolute top-30 left-0 right-0 flex flex-col items-center z-10"
          variants={bottomGroupVariants}
        >
          <h1 className="font-playfair text-3xl font-bold text-center uppercase">
            <span className="text-primary text-[#fff]">Estime</span>
            <motion.span
              style={{ color: accentColor }}
              animate={{ color: accentColor }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              {' '}
              Vangu
            </motion.span>
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-bold text-center mt-4 uppercase">
              <span className="font-bold text-white">Web</span>
              <motion.span
                className="inline-block mx-0 w-8 h-8 -mt-1"
                style={{ color: accentColor }}
                animate={{ color: accentColor }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <RxSlash className="mt-2 mx-[2px]" />
              </motion.span>
              <span className="font-bold text-white">App</span>{' '}
              <motion.span
                style={{ color: accentColor }}
                animate={{ color: accentColor }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                Developer
              </motion.span>
            </p>
            <div className="mt-4">
              <SocialIcons accentColor={accentColor} />
            </div>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {showImage && (
          <motion.div
            key="main-image"
            className="relative hidden lg:block
            w-[400px] h-[400px]
            md:w-[500px] md:h-[500px]
            lg:w-[800px] lg:h-[800px]
            xl:w-[700px] xl:h-[700px]
            mt-[455px]
            md:mt-[630px]
            lg:mt-[260px]
            xl:mt-[360px]"
            variants={imagePresenceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="absolute inset-0 blur-3xl opacity-50 rounded-full overflow-hidden mt-[100px]
              lg:mt-[100px] w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px]"
              style={{ backgroundColor: accentColor }}
              animate={{ backgroundColor: accentColor }}
              transition={{ duration: 0.8 }}
            />
            <Image
              src="/images/me.png"
              alt="Image principale"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </motion.div>
        )}

        {isHome && (
          <motion.div
            key="about-me"
            className="lg:hidden flex flex-col gap-4 w-full px-4 mt-[16px] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Carte About Me */}
            <motion.div
              className="backdrop-blur-sm w-full rounded-2xl p-6 relative overflow-hidden mt-44"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: accentColor }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <div className="text-white pt-0">
                <p className="text-sm mb-6 text-justify leading-relaxed">
                  Hey, I&apos;m a{' '}
                  <motion.span className="font-bold uppercase" style={{ color: accentColor }}>
                    web & mobile developer
                  </motion.span>{' '}
                  based in Belgium, with a passion for{' '}
                  <motion.span className="font-bold uppercase" style={{ color: accentColor }}>
                    design, code, and culture
                  </motion.span>
                  . My work sits at the intersection of{' '}
                  <motion.span className="font-bold uppercase" style={{ color: accentColor }}>
                    creativity and precision
                  </motion.span>
                  , where every pixel matters and every line of code has a purpose.
                </p>
                <p className="text-sm mb-6 text-justify leading-relaxed">
                  Since 2022, I&apos;ve been building{' '}
                  <motion.span className="font-bold uppercase" style={{ color: accentColor }}>
                    digital products
                  </motion.span>{' '}
                  that are not only aesthetic and responsive, but also{' '}
                  <motion.span className="font-bold uppercase" style={{ color: accentColor }}>
                    SEO-friendly and client-focused
                  </motion.span>
                  . I believe in crafting{' '}
                  <motion.span className="font-bold uppercase" style={{ color: accentColor }}>
                    user-first experiences
                  </motion.span>{' '}
                  — fast, smooth, and intuitive — that speak to people and perform in the real
                  world.
                </p>
                <p className="text-sm text-justify leading-relaxed">
                  My vibe?{' '}
                  <motion.span className="font-bold uppercase" style={{ color: accentColor }}>
                    Street energy, clean execution
                  </motion.span>
                  . I code like I design — with intention, with flow, and with the user in mind.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CentralImage;
