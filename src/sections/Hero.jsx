import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white text-center">
          Vibe is loading...
        </h1>
      </motion.div>
    </section>
  )
}
