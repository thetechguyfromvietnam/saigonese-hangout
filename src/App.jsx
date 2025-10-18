import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ThemeNavbar from "./components/Navbar/ThemeNavbar.jsx";
import TourNavbar from "./components/Navbar/TourNavbar.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Saigonir from "./pages/Saigonir.jsx";
import Tours from "./pages/Tours.jsx";
// Tour Pages
import HistoryTour from "./pages/tours/HistoryTour.jsx";
import CoffeeMarket from "./pages/tours/CoffeeMarket.jsx";
import CityTour from "./pages/tours/CityTour.jsx";
import NightLife from "./pages/tours/NightLife.jsx";

// Booking Pages
import BasicHistory from "./pages/booking/history/BasicHistory.jsx";
import PremiumHistory from "./pages/booking/history/PremiumHistory.jsx";
import BasicCoffee from "./pages/booking/coffee/BasicCoffee.jsx";
import PremiumCoffee from "./pages/booking/coffee/PremiumCoffee.jsx";
import BasicStreetFood from "./pages/booking/streetfood/BasicStreetFood.jsx";
import PremiumStreetFood from "./pages/booking/streetfood/PremiumStreetFood.jsx";
import BasicNightLife from "./pages/booking/nightlife/BasicNightLife.jsx";
import PremiumNightLife from "./pages/booking/nightlife/PremiumNightLife.jsx";
import BasicPhotography from "./pages/booking/photography/BasicPhotography.jsx";
import PremiumPhotography from "./pages/booking/photography/PremiumPhotography.jsx";
import BasicCuChiMotorcycle from "./pages/booking/cuchimotorcycle/BasicCuChiMotorcycle.jsx";
import PremiumCuChiMotorcycle from "./pages/booking/cuchimotorcycle/PremiumCuChiMotorcycle.jsx";
import BookingSuccess from "./pages/booking/success/BookingSuccess.jsx";

const App = () => {
  const [theme, setTheme] = useState("morning");

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        theme === "night"
          ? "bg-gradient-to-b from-[#0b0b14] via-[#1a052e] to-[#3d0f55] text-white"
          : "bg-gradient-to-b from-[#fdfcfb] to-[#e2d1c3] text-[#0f3e2c]"
      }`}
    >
      <BrowserRouter>
        <ThemeNavbar theme={theme} setTheme={setTheme} />
        <TourNavbar theme={theme} />

        <main className="pt-32 sm:pt-28 md:pt-28 px-4 md:px-10">
          <Routes>
            {/* General */}
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/saigonir" element={<Saigonir theme={theme} />} />
            <Route path="/tours" element={<Tours theme={theme} />} />

            {/* Tour Pages */}
            <Route path="/tours/history" element={<HistoryTour theme={theme} />} />
            <Route path="/tours/coffee" element={<CoffeeMarket theme={theme} />} />
            <Route path="/tours/city" element={<CityTour theme={theme} />} />
            <Route path="/tours/nightlife" element={<NightLife theme={theme} />} />

            {/* Booking Pages */}
            <Route path="/booking/history/basic" element={<BasicHistory />} />
            <Route path="/booking/history/premium" element={<PremiumHistory />} />
            <Route path="/booking/coffee/basic" element={<BasicCoffee />} />
            <Route path="/booking/coffee/premium" element={<PremiumCoffee />} />
            <Route path="/booking/streetfood/basic" element={<BasicStreetFood />} />
            <Route path="/booking/streetfood/premium" element={<PremiumStreetFood />} />
            <Route path="/booking/nightlife/basic" element={<BasicNightLife />} />
            <Route path="/booking/nightlife/premium" element={<PremiumNightLife />} />
            <Route path="/booking/photography/basic" element={<BasicPhotography />} />
            <Route path="/booking/photography/premium" element={<PremiumPhotography />} />
            <Route path="/booking/cuchimotorcycle/basic" element={<BasicCuChiMotorcycle />} />
            <Route path="/booking/cuchimotorcycle/premium" element={<PremiumCuChiMotorcycle />} />
            <Route path="/booking/success" element={<BookingSuccess />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
