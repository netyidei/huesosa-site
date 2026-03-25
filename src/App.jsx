import React, { useState } from 'react'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className={`${theme} min-h-screen transition-colors duration-500`}>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        <Hero />
        <Projects />
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}

export default App
