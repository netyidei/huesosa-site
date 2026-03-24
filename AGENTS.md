# 🤖 AGENTS.md — AI Assistant Instructions

## 🌊 Project Philosophy (Vibe Coding)
* **Minimalism Above All**: Avoid heavy UI frameworks (MUI, AntD). Use **Tailwind CSS** exclusively.
* **No Over-Engineering**: We are not building an enterprise system. Write code that is clean, readable, and easy to maintain.
* **Premium Aesthetics**: Every component should feel "premium" through generous whitespace and precise typography, rather than cluttered gradients or shadows.

---

## 🛠 Tech Stack
* **Frontend**: React (Vite).
* **Styling**: Tailwind CSS (Utility-first approach).
* **Icons**: Lucide-react (thin, minimalist strokes).
* **Animations**: Framer Motion (only for subtle entry effects; keep it smooth and minimal).

---

## 📐 Project Architecture
Maintain a flat and intuitive folder structure:
* `src/components/` — Small, reusable UI atoms (Buttons, Cards).
* `src/sections/` — Main landing page blocks (Hero, Projects, Contact).
* `src/App.jsx` — The main entry point and layout assembly.
* **State Management**: Use `useState` and `useEffect` only. No Redux or complex state managers.

---

## 📜 Coding Standards
1. **React**: Functional components and hooks only.
2. **Tailwind**: Write classes directly in JSX. If a string becomes too long, use line breaks, but do not move them to separate CSS files.
3. **Cleanliness**: Remove unused imports immediately.
4. **Context**: Keep in mind the author's background in **Pygame**. When explaining concepts (like state), use analogies related to game loops or sprite updates.

---

## 🎯 UI/UX Requirements
* **Negative Space**: Use large gaps and padding (`gap-10`, `py-20`). Let the elements "breathe."
* **Colors**: Pure white background, near-black text (`text-slate-900`), and a single accent color for key elements.
* **Typography**: Use standard Sans-serif stacks (Inter, Geist, or System Sans); clean and legible.
* **Undertale Reference**: In the projects section, include a subtle, stylish nod to the Undertale Pygame clone (e.g., a pixel-perfect micro-interaction on hover).