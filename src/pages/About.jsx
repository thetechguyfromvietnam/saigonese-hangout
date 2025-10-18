import React from "react";

const About = ({ theme }) => {
  const isMorning = theme === "morning";

  return (
    <section
      className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 text-center transition-all duration-700 ${
        isMorning ? "bg-[#fffaf4] text-gray-800" : "bg-[#0b0b14] text-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 ${
            isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
          }`}
        >
          About{" "}
          <span
            className={`${
              isMorning ? "text-[#c2a46b]" : "text-[#ffcd3c]"
            }`}
          >
            Saigonese Hang-out
          </span>
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed ${
            isMorning ? "text-gray-700" : "text-gray-300"
          }`}
        >
          We're a bunch of born-and-bred Saigonese showing you our city the way we see it —
          raw, loud, a bit chaotic, but full of stories, food, and vibes.
          No tourist traps, just pure "chill with locals" energy.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
          <div
            className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition ${
              isMorning
                ? "bg-white text-gray-800"
                : "bg-white/10 border border-white/20 text-gray-100 backdrop-blur-sm"
            }`}
          >
            <h3
              className={`text-xl sm:text-2xl font-semibold mb-3 ${
                isMorning ? "text-[#0f3e2c]" : "text-[#ffcd3c]"
              }`}
            >
              Our Mission 🎯
            </h3>
            <p className="leading-relaxed text-sm sm:text-base">
              Bring travelers closer to Saigon's real heartbeat — from morning coffee
              corners and wet markets to rooftop bars and street food carts.
              We want you to feel like you've got a local friend, not a guide.
            </p>
          </div>

          <div
            className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition ${
              isMorning
                ? "bg-white text-gray-800"
                : "bg-white/10 border border-white/20 text-gray-100 backdrop-blur-sm"
            }`}
          >
            <h3
              className={`text-xl sm:text-2xl font-semibold mb-3 ${
                isMorning ? "text-[#0f3e2c]" : "text-[#ffcd3c]"
              }`}
            >
              Why Tour With Us 😎
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li>We talk real. No scripts, no fake smiles.</li>
              <li>We take you where we hang out — hidden gems only locals know.</li>
              <li>We vibe with every traveler, whether you're solo or squad.</li>
              <li>We keep it flexible, fun, and full of surprises.</li>
            </ul>
          </div>
        </div>

        <p
          className={`font-semibold mt-8 sm:mt-10 md:mt-12 text-base sm:text-lg md:text-xl ${
            isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
          }`}
        >
          Come ride with us — feel Saigon, not just see it 🇻🇳✨
        </p>
      </div>
    </section>
  );
};

export default About;
