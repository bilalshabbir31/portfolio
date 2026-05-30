const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 py-8 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Muhammad Bilal. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
