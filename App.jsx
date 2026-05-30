import { useScrollReveal } from './components/useScrollReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream text-ink relative overflow-x-hidden">
      <div className="fixed inset-0 hero-mesh pointer-events-none z-0" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-glow pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl animate-glow pointer-events-none z-0" style={{ animationDelay: '2s' }} />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
