'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { IoIosCloseCircle } from 'react-icons/io';
import { projectModalVariants } from '../../../../../lib/animations';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  link?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | undefined;
  accentColor: string;
}

const ProjectModal = ({ isOpen, onClose, project, accentColor }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
          {...projectModalVariants.overlay}
          style={{ pointerEvents: 'auto' }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="w-full max-h-[90vh] backdrop-blur-md rounded-2xl overflow-hidden border border-white/10"
            style={{
              backgroundColor: `${accentColor}20`,
              pointerEvents: 'auto',
            }}
            {...projectModalVariants.content}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <motion.div
              className="p-4 border-b border-white/10 relative z-[101]"
              {...projectModalVariants.header}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white uppercase">{project.title}</h2>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="text-white p-2"
                  {...projectModalVariants.closeButton}
                >
                  <IoIosCloseCircle className="text-4xl" />
                </motion.button>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div className="p-4" {...projectModalVariants.body}>
              <motion.div className="relative" {...projectModalVariants.image}>
                <div className="relative h-[650px] w-full rounded-xl overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-white text-lg font-bold">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-white text-lg font-bold mb-4 border border-white/10 rounded-lg px-4 py-2"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
