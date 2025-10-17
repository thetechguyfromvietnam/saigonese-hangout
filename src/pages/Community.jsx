import React from "react";
import { Link } from "react-router-dom";

const CommunitySection = ({ theme }) => {
  const isMorning = theme === "morning";

  return (
    <section
      className={`py-20 px-6 md:px-16 text-center transition-all duration-700 ${
        isMorning
          ? "bg-[#fffaf4] text-[#0f3e2c]"
          : "bg-[#0b0b14] text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-extrabold mb-6 ${
            isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
          }`}
        >
          Saigon for Saigon ❤️
        </h2>

        <p
          className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 ${
            isMorning ? "text-gray-700" : "text-gray-300"
          }`}
        >
          Every time you book a tour with <span className="font-semibold">Saigonese Hang-out</span>,
          we sponsor <span className="text-[#c2a46b] font-semibold">one meal </span> 
          for a homeless person in Ho Chi Minh City.  
          It’s our way of sharing not only the stories of this city — 
          but also its warmth.
        </p>

        <div
          className={`rounded-2xl p-8 shadow-lg mt-6 ${
            isMorning
              ? "bg-white text-gray-800"
              : "bg-white/10 border border-white/20 text-gray-100 backdrop-blur-sm"
          }`}
        >
          <p className="text-lg md:text-xl mb-6">
            You explore Saigon.  
            Someone else gets a hot meal.  
            <span
              className={`block mt-2 font-semibold ${
                isMorning ? "text-[#0f3e2c]" : "text-[#ffcd3c]"
              }`}
            >
              That’s what community means.
            </span>
          </p>

          <Link
            to="/tours"
            className={`inline-block font-semibold px-8 py-3 rounded-lg transition ${
              isMorning
                ? "bg-[#0f3e2c] text-white hover:bg-[#14503a]"
                : "bg-gradient-to-r from-[#4361ee] to-[#4cc9f0] text-white hover:opacity-90"
            }`}
          >
            Book a Tour → Give a Meal
          </Link>
        </div>

        <p
          className={`mt-10 text-sm ${
            isMorning ? "text-gray-500" : "text-gray-400"
          }`}
        >
          *Part of our “Saigon Shares” initiative in collaboration with local kitchens & volunteers.
        </p>
      </div>
    </section>
  );
};

export default CommunitySection;
