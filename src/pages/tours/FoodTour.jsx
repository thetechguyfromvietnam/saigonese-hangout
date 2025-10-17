import Navbar from "../../components/Navbar/TourNavbar.jsx";
import Hero from "../../components/Hero.jsx";
import Footer from "../../components/Footer.jsx";

const FoodTour = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero
        title="Food Tour"
        subtitle="🟡 Add overview text for Food Tour here"
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#0f3e2c] mb-4">Tour Levels</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="border rounded-xl p-6 shadow hover:shadow-lg">
            <h3 className="font-semibold text-xl mb-2 text-[#0f3e2c]">
              Backpacker — $30
            </h3>
            <p>🟡 Add description and inclusions here.</p>
          </div>
          <div className="border rounded-xl p-6 shadow hover:shadow-lg">
            <h3 className="font-semibold text-xl mb-2 text-[#0f3e2c]">
              Premium (Sport Bike) — $50
            </h3>
            <p>🟡 Add description and inclusions here.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoodTour;
