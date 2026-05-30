import FloatingTechIcons from './FloatingTechIcons';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 px-6 overflow-hidden">
      <FloatingTechIcons />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 surface-card rounded-full mb-6 slide-up border-emerald-500/30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <span className="text-emerald-400 font-medium text-sm">Available for opportunities</span>
        </div>

        <div className="mb-2 slide-up stagger-1">
          <span className="text-xl md:text-2xl text-muted">Hi, I&apos;m</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 slide-up stagger-1">
          <span className="gradient-text">Muhammad Bilal</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-zinc-300 mb-6 slide-up stagger-2 font-semibold">
          Software Engineer
        </h2>

        <p className="text-lg text-muted mb-8 leading-relaxed max-w-3xl slide-up stagger-3">
          Full-Stack Developer with 3 years of experience designing and building scalable, high-performance web applications using Node.js, Express.js, Golang, Ruby on Rails, and AWS. I transform complex technical challenges into elegant solutions—from architecting microservices to optimizing databases—with a focus on performance, maintainability, and exceptional user experience.
        </p>

        <div className="flex flex-wrap gap-4 mb-8 slide-up stagger-4">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#projects" className="btn-outline">
            View Projects
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Muhammad_Bilal_CV.pdf`}
            download="Muhammad_Bilal_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-zinc-800 text-zinc-100 font-medium rounded-xl border border-zinc-700 hover:border-violet-500/50 hover:bg-zinc-700 transition-all hover:scale-105 flex items-center gap-2 shadow-md"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-500 slide-up stagger-5">
          <a href="mailto:imbilal31@gmail.com" className="hover:text-violet-400 transition-colors">
            Email
          </a>
          <span className="text-zinc-700">•</span>
          <a href="https://linkedin.com/in/bilalshabbir31" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
            LinkedIn
          </a>
          <span className="text-zinc-700">•</span>
          <a href="https://github.com/bilalshabbir31" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <a href="#about" className="text-zinc-500 hover:text-violet-400 transition-colors" aria-label="Scroll down">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
