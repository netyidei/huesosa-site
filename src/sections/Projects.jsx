import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Gamepad2, Layout, LayoutGrid } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Undertale Clone (Pygame)",
    description: "A pixel-perfect recreation of the classic soul-dodging mechanics, built entirely in Python with Pygame. Focuses on hitboxes and frame-perfect interactions.",
    tags: ["Python", "Pygame", "Game Dev"],
    iconName: "Gamepad2",
    isSpecial: true
  },
  {
    id: 2,
    title: "Vibe Landing",
    description: "This very site. A study in minimalism, negative space, and premium web aesthetics using React and Tailwind CSS.",
    tags: ["React", "Tailwind", "Vite"],
    iconName: "Layout"
  },
  {
    id: 3,
    title: "Neural Network Visualizer",
    description: "An interactive tool to visualize backpropagation and weight updates in real-time.",
    tags: ["JavaScript", "Canvas", "ML"],
    iconName: "LayoutGrid"
  }
];

import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-light text-slate-900 dark:text-white mb-16 tracking-tight text-center md:text-left">
          Selected Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              {...project}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
