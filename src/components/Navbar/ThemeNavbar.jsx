import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ThemeNavbar = ({ theme, setTheme }) => {
  const isMorning = theme === "morning";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0b14]/95 text-white flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3 z-50 shadow-lg">
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
      {/* Center menu */}
      <div className="hidden md:flex gap-6 lg:gap-8 font-semibold">
        <Link to="/" className="hover:text-[#4cc9f0]">Home</Link>
        <Link to="/tours" className="hover:text-[#4cc9f0]">Tours</Link>
        <Link to="/blog" className="hover:text-[#4cc9f0]">Blog</Link>
        <Link to="/saigonir" className="hover:text-[#4cc9f0]">Saigonir</Link>
      </div>

      {/* Right: social + theme button */}
      <div className="flex items-center gap-2 sm:gap-4">
        <a href="https://www.instagram.com/saigonesehangout/" target="_blank" rel="noreferrer">
          <FaInstagram className="text-lg sm:text-2xl hover:text-[#c77dff] transition" />
        </a>
        <a href="https://wa.me/+84978270038" target="_blank" rel="noreferrer">
          <FaWhatsapp className="text-lg sm:text-2xl hover:text-green-400 transition" />
        </a>
        <a href="mailto:thestoriesguys@gmail.com">
          <FaEnvelope className="text-lg sm:text-2xl hover:text-[#4cc9f0] transition" />
        </a>

        {/* Fixed-width button */}
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
    </nav>
  );
};

export default ThemeNavbar;
