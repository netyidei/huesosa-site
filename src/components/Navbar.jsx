import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 px-6 py-3 rounded-full shadow-sm">
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
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
