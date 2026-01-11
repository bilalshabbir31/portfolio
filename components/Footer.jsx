const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Muhammad Bilal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
