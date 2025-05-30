'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import {
  projectCardVariants,
  projectGridVariants,
  projectItemVariants,
  projectTabVariants,
} from '../../../../../lib/animations';
import ProjectGrid from './ProjectGrid';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  accentColor: string;
}

// Données temporaires pour les projets
const webProjects = [
  {
    id: 1,
    title: 'One Coffee & Code',
    image: '/images/projects/code.png',
    description: 'A website for a coffee shop randomly made called "One Coffee & Code"',
    link: 'https://coffeeandcode.fr',
  },
  {
    id: 2,
    title: 'Purpose Sport',
    image: '/images/projects/sport.png',
    description: 'A website for a sport managment agency called "Purpose Sport"',
    link: 'https://purpose-sport.com/',
  },
  {
    id: 3,
    title: 'Jikowood',
    image: '/images/projects/wood.png',
    description: 'A website for a promicin company of charpentry called "Jikowood"',
    link: 'https://jikowood.be',
  },
  {
    id: 4,
    title: 'Smoked Parfum',
    image: '/images/projects/smoked.png',
    description:
      'A website for a smoked parfum shop called "Smoked Parfume" this website is still in development and will be launched soon',
  },
];

const mobileProjects = [
  {
    id: 1,
    title: 'Sneak In Eazey',
    image: '/images/projects/sneaks.png',
    description:
      'A Mobile App social network for a sneakerhead called "Sneake In Eazey" this app is still in development',
  },
  {
    id: 2,
    title: 'HEY, i COOK',
    image: '/images/projects/cook.png',
    description:
      'A Mobile App for a cooking recipes to make at home called "Hey, I COOK" this app is still in development',
  },
];

const ProjectCard = ({ accentColor }: ProjectCardProps) => {
  const [selectedProject, setSelectedProject] = useState<{
    project: (typeof webProjects)[0] | (typeof mobileProjects)[0];
    type: 'web' | 'mobile';
  } | null>(null);

  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');

  return (
    <motion.div
      className="absolute inset-0 flex items-start justify-center overflow-hidden"
      variants={projectCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        pointerEvents: selectedProject ? 'auto' : 'none',
        zIndex: selectedProject ? 100 : 1,
      }}
    >
      {/* Version Desktop */}
      <motion.div
        className="hidden lg:block backdrop-blur-sm w-[80%] max-w-6xl rounded-2xl p-6 relative overflow-hidden mr-0 md:mr-40 mt-0 md:mt-44"
        variants={projectGridVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ pointerEvents: 'auto' }}
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
            <h2 className="text-3xl font-bold ">Projects</h2>
            <p className="text-white/90 text-xl max-w-8xl my-4">
              Each project I build is crafted with purpose — optimized for SEO, designed to be
              intuitive, and tailored to meet real client needs. I focus on clean structure, fast
              performance, and user-friendly interfaces to deliver both visibility and impact. My
              goal? Build digital products that not only look good, but work smart.{' '}
            </p>

            {/* Sous-cartes */}
            <div className="grid grid-cols-2 gap-6">
              {/* Carte Web Projects */}
              <motion.div
                className="backdrop-blur-sm rounded-xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: accentColor }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
                <h3 className="text-2xl font-bold mb-6 uppercase">Web Projects</h3>
                <ProjectGrid projects={webProjects} accentColor={accentColor} />
              </motion.div>

              {/* Carte Mobile Projects */}
              <motion.div
                className="backdrop-blur-sm rounded-xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: accentColor }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                />
                <h3 className="text-2xl font-bold mb-6 uppercase">Mobile Projects</h3>
                <ProjectGrid projects={mobileProjects} accentColor={accentColor} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Version Mobile */}
      <div className="lg:hidden w-full h-full pointer-events-auto">
        <div className="px-4 pt-[125px] pb-8 h-full">
          {/* Carte Projects */}
          <motion.div
            className="backdrop-blur-sm w-full rounded-2xl p-6 relative overflow-hidden h-full"
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
            <div className="text-white pt-4 h-full flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <p className="text-white/90 text-lg max-w-8xl mb-6">
                Each project I build is crafted with purpose — optimized for SEO, designed to be
                intuitive, and tailored to meet real client needs.
              </p>

              {/* Tabs */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('web')}
                  className={`px-4 py-2 rounded-lg transition-colors uppercase ${
                    activeTab === 'web' ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'
                  }`}
                  style={{ color: activeTab === 'web' ? accentColor : 'white' }}
                >
                  Web Projects
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`px-4 py-2 rounded-lg transition-colors uppercase ${
                    activeTab === 'mobile' ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'
                  }`}
                  style={{ color: activeTab === 'mobile' ? accentColor : 'white' }}
                >
                  Mobile Projects
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <AnimatePresence mode="wait">
                  {activeTab === 'web' ? (
                    <motion.div
                      key="web"
                      className="grid grid-cols-2 gap-4"
                      {...projectTabVariants.web}
                    >
                      {webProjects.map((project) => (
                        <motion.div
                          key={project.id}
                          className="relative h-[200px] rounded-xl overflow-hidden"
                          onClick={() => setSelectedProject({ project, type: 'web' })}
                          variants={projectItemVariants}
                          whileHover="hover"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 50vw"
                            className="object-cover"
                            priority={project.id <= 2}
                          />
                          <h4 className="text-base font-bold text-center pb-10">{project.title}</h4>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mobile"
                      className="grid grid-cols-2 gap-4"
                      {...projectTabVariants.mobile}
                    >
                      {mobileProjects.map((project) => (
                        <motion.div
                          key={project.id}
                          className="relative h-[250px] rounded-xl overflow-hidden "
                          onClick={() => setSelectedProject({ project, type: 'mobile' })}
                          variants={projectItemVariants}
                          whileHover="hover"
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 50vw"
                            className="object-cover"
                            priority={true}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="absolute bottom-0 p-2 w-full">
                              <h4 className="text-base font-bold">{project.title}</h4>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject?.project}
        accentColor={accentColor}
      />
    </motion.div>
  );
};

export default ProjectCard;
