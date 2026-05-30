const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6 bg-zinc-950/80">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Muhammad Bilal. All rights reserved.
        </p>
        <p className="text-zinc-600 text-xs mt-2">Built with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
