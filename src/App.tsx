import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Research } from './components/sections/Research';
import { Experience } from './components/sections/Experience';
import { Beyond } from './components/sections/Beyond';
import { Contact } from './components/sections/Contact';

/**
 * The homepage. Sections appear in this order.
 *
 * Adding dedicated pages later (e.g. /projects/<slug>): install a router such as
 * react-router, move this component into src/pages/Home.tsx, and create
 * src/pages/ProjectPage.tsx that looks up a project by its `slug` in
 * src/data/projects.ts. See README → "Adding project and research pages".
 */
export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
