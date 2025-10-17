import React from "react";
import { Link } from "react-router-dom";

const Testimonials = ({ theme }) => {
  const isMorning = theme === "morning";

  const reviews = [
    { img: "/images/reviews/review1.jpg", alt: "Customer review 1" },
    { img: "/images/reviews/review2.jpg", alt: "Customer review 2" },
    { img: "/images/reviews/review3.jpg", alt: "Customer review 3" },
    { img: "/images/reviews/review4.jpg", alt: "Customer review 4" },
  ];

  return (
    <section
      className={`py-20 px-6 md:px-16 text-center transition-all duration-700 ${
        isMorning ? "bg-[#f9f9f9] text-gray-800" : "bg-[#0b0b14] text-white"
      }`}
    >
      <h2
        className={`text-4xl font-bold mb-6 ${
          isMorning ? "text-[#0f3e2c]" : "text-[#4cc9f0]"
        }`}
      >
        What Our Guests Say
      </h2>

      <p
        className={`mb-10 max-w-2xl mx-auto ${
          isMorning ? "text-gray-600" : "text-gray-300"
        }`}
      >
        Real experiences shared by travelers who joined our Saigonese Hang-out
        tours.
      </p>

      {/* Review Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform ${
              isMorning ? "bg-white" : "bg-white/10 border border-white/10"
            }`}
          >
            <img
              src={r.img}
              alt={r.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-10">
        <Link
          to="/reviews"
          className={`inline-block font-semibold px-6 py-3 rounded-lg transition ${
            isMorning
              ? "bg-[#0f3e2c] text-white hover:bg-[#14503a]"
              : "bg-gradient-to-r from-[#4361ee] to-[#4cc9f0] text-white hover:opacity-90"
          }`}
        >
          See More Reviews →
        </Link>
      </div>

      <p
        className={`mt-6 text-sm ${
          isMorning ? "text-gray-500" : "text-gray-400"
        }`}
      >
        *All reviews are authentic screenshots shared by our customers.
      </p>
    </section>
  );
};

export default Testimonials;
