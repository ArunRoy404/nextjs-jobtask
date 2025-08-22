const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">
              Gadget<span className="text-indigo-400">Sphere</span>
            </span>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} GadgetSphere. All rights reserved.
          </p>

          {/* Minimal Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-indigo-300 text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-300 text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-300 text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;