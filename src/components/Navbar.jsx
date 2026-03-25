import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] md:w-auto">
      <div className="bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm">
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] md:text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
