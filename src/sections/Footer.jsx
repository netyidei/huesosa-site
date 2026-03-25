import React from 'react';
import { Github, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 pb-12 px-6 max-w-6xl mx-auto border-t border-slate-50 dark:border-slate-800 pt-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-slate-500 dark:text-slate-400 text-sm font-light tracking-wide text-center md:text-left">
          <p>© 2026 Dimash. Vibe coding only.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/netyidei" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 stroke-[1.5px]" />
          </a>
          <a 
            href="https://t.me/dimash" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Telegram"
          >
            <Send className="w-5 h-5 stroke-[1.5px]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
