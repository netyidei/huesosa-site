import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-full shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 z-50 group"
      aria-label="Toggle Vibe"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme === 'light' ? 'sun' : 'moon'}
          initial={{ y: 20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {theme === 'light' ? (
            <Sun className="w-6 h-6 text-indigo-500 stroke-[1.5px]" />
          ) : (
            <Moon className="w-6 h-6 text-indigo-400 stroke-[1.5px]" />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Tooltip hint */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-900 text-white text-[10px] uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
        Switch Vibe
      </span>
    </button>
  );
};

export default ThemeToggle;
