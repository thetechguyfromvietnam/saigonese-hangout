import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b14] text-white py-6 sm:py-8 px-4 sm:px-6 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {/* Logo + Description */}
        <div className="sm:col-span-2 md:col-span-1">
          <img
            src="/images/logo.png"
            alt="Saigonese Hang-out Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 mb-3 rounded-lg object-cover"
          />
          <p className="text-gray-400 mb-3 text-xs sm:text-sm leading-relaxed">
            A local-led community sharing authentic hangouts with you in the heart of Saigon.
          </p>
          <div className="flex gap-3 text-lg sm:text-xl text-gray-400">
            <a href="https://www.instagram.com/saigonesehangout/" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-[#c77dff]" />
            </a>
            <a href="https://www.facebook.com/minionbobtuananh/" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-[#4cc9f0]" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-[#ff0000]" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok className="hover:text-[#c2a46b]" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">Quick Links</h3>
          <ul className="space-y-1 text-gray-400 text-xs sm:text-sm">
            <li><a href="/" className="hover:text-[#4cc9f0]">Home</a></li>
            <li><a href="/about" className="hover:text-[#4cc9f0]">About</a></li>
            <li><a href="/blog" className="hover:text-[#4cc9f0]">Blog</a></li>
            <li><a href="/contact" className="hover:text-[#4cc9f0]">Contact</a></li>
            <li><a href="/saigonir" className="hover:text-[#4cc9f0]">Saigonir</a></li>
          </ul>
        </div>

        {/* Payments */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">Payments are secured</h3>
          <div className="flex gap-2 items-center">
            <img src="/assets/visa.png" alt="Visa" className="w-8 h-auto sm:w-10" />
            <img src="/assets/mastercard.png" alt="MasterCard" className="w-8 h-auto sm:w-10" />
            <img src="/assets/paypal.png" alt="PayPal" className="w-12 h-auto sm:w-14" />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">Contact Info</h3>
          <p className="text-gray-400 mb-1 text-xs sm:text-sm">Feel free to reach out:</p>
          <p className="text-sm sm:text-base font-semibold text-white">
            +84 979 270 038 <span className="text-green-400">– WhatsApp</span>
          </p>
          <p className="text-gray-400 mb-1 text-xs sm:text-sm">Mon–Sun, 8:30am – 6:00pm</p>
          <a
            href="mailto:thestoriesguys@gmail.com"
            className="text-pink-400 text-xs sm:text-sm hover:underline"
          >
            thestoriesguys@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 pt-4 text-center text-gray-500 text-xs sm:text-sm">
        © 2025 Saigonese Hang-out. Made with ❤️ in Ho Chi Minh City.
      </div>
    </footer>
  );
};

export default Footer;
