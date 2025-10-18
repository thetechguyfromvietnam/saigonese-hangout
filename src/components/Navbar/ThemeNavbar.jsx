import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const ThemeNavbar = ({ theme, setTheme }) => {
  const isMorning = theme === "morning";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0b0b14]/95 backdrop-blur-sm text-white z-50 shadow-lg">
        <div className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/images/logo.png"
              alt="Saigonese Hang-out Logo"
              className="w-8 h-6 sm:w-11 sm:h-9 rounded-full object-cover"
            />
            <Link to="/" className="text-lg sm:text-xl font-bold gradient-text">
              Saigonese Hang-out
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 font-semibold">
            <Link to="/" className="hover:text-[#4cc9f0] transition-colors">
              Home
            </Link>
            <Link to="/tours" className="hover:text-[#4cc9f0] transition-colors">
              Tours
            </Link>
            <Link to="/blog" className="hover:text-[#4cc9f0] transition-colors">
              Blog
            </Link>
            <Link to="/saigonir" className="hover:text-[#4cc9f0] transition-colors">
              Saigonir
            </Link>
          </div>

          {/* Right Side - Social Media + Mobile Menu Button + Theme Button */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Social Media Buttons - Desktop Only */}
            <div className="hidden md:flex items-center gap-2 sm:gap-4">
              <a href="https://www.instagram.com/saigonesehangout/" target="_blank" rel="noreferrer">
                <FaInstagram className="text-lg sm:text-2xl hover:text-[#c77dff] transition" />
              </a>
              <a href="https://wa.me/+84978270038" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-lg sm:text-2xl hover:text-green-400 transition" />
              </a>
              <a href="mailto:thestoriesguys@gmail.com">
                <FaEnvelope className="text-lg sm:text-2xl hover:text-[#4cc9f0] transition" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(isMorning ? "night" : "morning")}
              className={`w-[100px] sm:w-[130px] px-2 sm:px-4 py-1 sm:py-2 ml-2 sm:ml-3 rounded-lg sm:rounded-xl font-semibold transition text-center text-xs sm:text-sm ${
                isMorning
                  ? "bg-gradient-to-r from-[#ffcd3c] to-[#ff914d] text-[#0f3e2c] hover:opacity-90"
                  : "bg-gradient-to-r from-[#4361ee] to-[#4cc9f0] text-white hover:opacity-90"
              }`}
            >
              {isMorning ? "🌞 Morning" : "🌙 Night"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0b0b14]/98 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block py-2 text-white hover:text-[#4cc9f0] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/tours"
                className="block py-2 text-white hover:text-[#4cc9f0] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tours
              </Link>
              <Link
                to="/blog"
                className="block py-2 text-white hover:text-[#4cc9f0] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/saigonir"
                className="block py-2 text-white hover:text-[#4cc9f0] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Saigonir
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Social Media Floating Buttons - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
        <a
          href="https://www.instagram.com/saigonesehangout/"
          target="_blank"
          rel="noreferrer"
          className="group bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Instagram"
        >
          <FaInstagram className="w-5 h-5 text-white group-hover:text-[#c77dff] transition-colors" />
        </a>
        <a
          href="https://wa.me/+84978270038"
          target="_blank"
          rel="noreferrer"
          className="group bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 text-white group-hover:text-green-400 transition-colors" />
        </a>
        <a
          href="mailto:thestoriesguys@gmail.com"
          className="group bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Email"
        >
          <FaEnvelope className="w-5 h-5 text-white group-hover:text-[#4cc9f0] transition-colors" />
        </a>
      </div>
    </>
  );
};

export default ThemeNavbar;