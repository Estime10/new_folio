'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  link?: string;
}

interface ProjectGridProps {
  projects: Project[];
  accentColor: string;
  isMobile?: boolean;
}

const ProjectGrid = ({ projects, accentColor, isMobile = false }: ProjectGridProps) => {
  return (
    <div
      className={`flex flex-col gap-8 ${
        !isMobile
          ? 'h-[600px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
          : 'h-[400px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
      }`}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="relative group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          whileHover={{ scale: 1, transition: { duration: 0.3 } }}
        >
          {/* Image Container */}
          <div
            className={`relative ${
              isMobile ? 'h-[250px]' : 'h-[500px]'
            } w-full rounded-xl overflow-hidden`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-102"
              priority={index < 2}
            />
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent ${
                isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              } transition-opacity duration-300 flex items-end`}
            >
              <div className="p-6 w-full">
                <h3 className="text-2xl font-bold mb-3" style={{ color: accentColor }}>
                  {project.title}
                </h3>
                <p className="text-white/90 text-lg max-w-2xl">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-white/90 hover:text-white transition-colors text-lg font-bold border border-white/10 rounded-lg px-4 py-2"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
