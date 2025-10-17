import Footer from "../components/Footer.jsx";
import qrContact from "../assets/images/qr-contact.jpg";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl font-bold text-[#0f3e2c] mb-4">Contact Us</h1>
        <p className="mb-8 text-gray-700">
          Scan the QR below to message us directly on WhatsApp or reach us via the buttons.
        </p>

        {/* QR Code */}
        <div className="mb-10">
          <img
            src={qrContact}
            alt="WhatsApp QR - Saigonese Hang-out"
            className="w-64 h-64 md:w-80 md:h-80 object-contain shadow-lg rounded-xl border border-gray-200"
          />
          <p className="mt-3 text-sm text-gray-600">Scan to chat with Saigonese Hang-out</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://wa.me/+84978270038"
            className="bg-[#c2a46b] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#b3925e]"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/saigonesehangout/"
            className="bg-[#0f3e2c] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#14503a]"
          >
            Instagram
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
