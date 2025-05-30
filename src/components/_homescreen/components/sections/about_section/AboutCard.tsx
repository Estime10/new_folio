'use client';

import { motion } from 'framer-motion';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiExpo,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

interface AboutCardProps {
  accentColor: string;
}

const techStack = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: <SiTypescript className="w-6 h-6" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" /> },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact className="w-6 h-6" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6" /> },
      { name: 'Framer Motion', icon: <FaReact className="w-6 h-6" /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" /> },
      { name: 'Supabase', icon: <SiSupabase className="w-6 h-6" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6" /> },
      { name: 'REST API', icon: <FaNodeJs className="w-6 h-6" /> },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', icon: <TbBrandReactNative className="w-6 h-6" /> },
      { name: 'Expo', icon: <SiExpo className="w-6 h-6" /> },
    ],
  },
  // {
  //   category: 'Tools & Others',
  //   items: [
  //     { name: 'Git', icon: <FaGitAlt className="w-6 h-6" /> },
  //     { name: 'Figma', icon: <FaFigma className="w-6 h-6" /> },
  //     { name: 'Vercel', icon: <SiVercel className="w-6 h-6" /> },
  //     { name: 'VS Code', icon: <FaCode className="w-6 h-6" /> },
  //   ],
  // },
];

const AboutCard = ({ accentColor }: AboutCardProps) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-start justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Version Desktop */}
      <motion.div
        className="hidden lg:block backdrop-blur-sm w-[80%] max-w-6xl rounded-2xl p-6 relative mr-0 md:mr-40 mt-0 md:mt-44 pointer-events-auto"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Barre de couleur en haut */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: accentColor }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <div className="flex flex-col gap-6">
          {/* Contenu */}
          <motion.div
            className="flex-1 text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-2">
              Hey! I&apos;m a{' '}
              <motion.span className="font-bold" style={{ color: accentColor }}>
                web & mobile developer
              </motion.span>{' '}
              based in Belgium, turning caffeine into code since 2022. I&apos;m passionate about{' '}
              <motion.span className="font-bold" style={{ color: accentColor }}>
                design, code, and culture
              </motion.span>{' '}
              - the perfect blend for creating digital experiences that don&apos;t just look good,
              but feel right.
            </p>
            <p className="text-lg mb-2">
              My work sits at the intersection of{' '}
              <motion.span className="font-bold" style={{ color: accentColor }}>
                creativity and precision
              </motion.span>
              . Think of me as a digital craftsman - where every pixel matters and every line of
              code has a purpose. I&apos;m not just building websites and apps; I&apos;m crafting
              experiences that resonate with users and make them go &quot;Wow!&quot;
            </p>
            <p className="text-lg mb-2">
              I combine{' '}
              <motion.span className="font-bold" style={{ color: accentColor }}>
                intuitive design with solid code
              </motion.span>{' '}
              to deliver smooth, engaging user experiences. My style?{' '}
              <motion.span className="font-bold" style={{ color: accentColor }}>
                Street energy, clean execution
              </motion.span>
              . I code like I design — with intention, with flow, and with the user in mind.
            </p>

            {/* Tech Stack */}
            <div className="mt-4">
              <div className="backdrop-blur-sm rounded-lg p-4 relative">
                <div className="max-h-[500px] overflow-y-auto">
                  <div
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: accentColor, opacity: 0.1 }}
                  />
                  <div className="relative z-10">
                    {techStack.map((section, index) => (
                      <motion.div
                        key={section.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        className="mb-4 last:mb-0"
                      >
                        <h3 className="text-lg font-semibold mb-2">{section.category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {section.items.map((item) => (
                            <motion.div
                              key={item.name}
                              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-1.5"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <div className="text-white/80">{item.icon}</div>
                              <span className="text-base">{item.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Version Mobile - About Me Only */}
      <div className="lg:hidden flex flex-col gap-4 w-full px-4 mt-[155px] pointer-events-auto">
        {/* Carte Languages */}
        <motion.div
          className="backdrop-blur-sm w-full rounded-2xl p-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: accentColor }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <div className="text-white space-y-6 pt-4">
            {techStack.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4">{section.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2"
                    >
                      <div className="text-white/80">{item.icon}</div>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutCard;
