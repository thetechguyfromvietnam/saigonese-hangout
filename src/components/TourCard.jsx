import { Link } from "react-router-dom";

const TourCard = ({ title, desc, img, theme, slug }) => (
  <div
    className={`rounded-xl shadow-lg overflow-hidden hover:scale-105 transition border ${
      theme === "night"
        ? "border-white/20 bg-[#121212] text-white"
        : "border-gray-200 bg-white text-[#0f3e2c]"
    }`}
  >
    {/* Image links to detail page */}
    <Link to={`/tours/${slug}`}>
      <img src={img} alt={title} className="w-full h-40 sm:h-48 object-cover" />
    </Link>

    <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[140px] sm:min-h-[150px]">
      <div>
        <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">{title}</h3>
        <p className="text-xs sm:text-sm opacity-100 mb-3 sm:mb-4 leading-relaxed">{desc}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 sm:gap-3 justify-center">
        <Link
          to={`/booking/${slug}/basic`}
          className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border font-medium transition text-sm sm:text-base ${
            theme === "night"
              ? "border-white text-white hover:bg-white/10"
              : "border-[#0f3e2c] text-[#0f3e2c] hover:bg-[#0f3e2c]/10"
          }`}
        >
          Basic
        </Link>

        <Link
          to={`/booking/${slug}/premium`}
          className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl font-medium transition text-sm sm:text-base ${
            theme === "night"
              ? "bg-white text-[#0f3e2c] hover:bg-white/80"
              : "bg-[#0f3e2c] text-white hover:bg-[#0f3e2c]/90"
          }`}
        >
          Premium
        </Link>
      </div>
    </div>
  </div>
);

export default TourCard;
