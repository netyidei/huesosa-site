import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Gamepad2, LayoutGrid, Terminal, Code2 } from 'lucide-react';

const icons = {
    Gamepad2,
    Layout,
    LayoutGrid,
    Terminal,
    Code2
};

const ProjectCard = ({ title, description, tags, iconName, isSpecial }) => {
  // Safe icon lookup
  const Icon = icons[iconName] || Layout;

  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.01 }}
      className={`group p-8 border border-slate-100 rounded-2xl transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/50 bg-white flex flex-col ${isSpecial ? 'hover:ring-1 hover:ring-indigo-500/20' : ''}`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-indigo-50 transition-colors">
          <Icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-500 transition-colors stroke-[1.5px]" />
        </div>
        
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest text-slate-400 font-medium whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">
        {title}
      </h3>
      
      <p className="text-slate-500 leading-relaxed font-light mb-auto">
        {description}
      </p>

      {isSpecial && (
          <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-xs font-mono text-slate-400">
              <div className="w-2 h-2 bg-red-500 animate-pulse rounded-full"></div>
              <span className="tracking-widest uppercase">Determination</span>
          </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
