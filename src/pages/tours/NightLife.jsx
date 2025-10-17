import Navbar from "../../components/Navbar/TourNavbar.jsx";
import Hero from "../../components/Hero.jsx";
import Footer from "../../components/Footer.jsx";
const NightLife = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero
        title="Night-Life Tour"
        subtitle="🟡 Add intro text for Night-Life Tour here"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#0f3e2c] mb-6">What’s Included</h2>
        <ul className="text-left list-disc list-inside space-y-2">
          <li>🟡 Add restaurant or bar stops</li>
          <li>🟡 Add karaoke and nightlife details</li>
          <li>🟡 Add pricing info</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default NightLife;
