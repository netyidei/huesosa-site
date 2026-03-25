import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
          Let's build something.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities and interesting projects to collaborate on. 
          Feel free to reach out for a chat.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform active:scale-95 group"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Say Hello</span>
          </a>
          <a
            href="https://t.me/dimash"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            <Send className="w-5 h-5 stroke-[1.5px]" />
            <span>Telegram</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
