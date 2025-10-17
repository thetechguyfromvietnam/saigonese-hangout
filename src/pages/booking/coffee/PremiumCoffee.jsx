import React, { useState } from 'react';

const PremiumCoffee = () => {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted for Premium Coffee & Market Tour! We\'ll contact you soon.');
    window.location.href = '/booking/success';
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-[#0f3e2c]">
            Premium Coffee & Market Tour
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Experience the ultimate Vietnamese coffee and market adventure. Visit exclusive coffee farms, 
            learn from master baristas, and enjoy a gourmet lunch featuring local specialties.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tour Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-orange-600">$75</span>
                <span className="text-lg text-gray-600">per person • 5 hours</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-gray-800">What's Included:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Everything in Basic Tour</strong> - All coffee tastings and market visits</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Private transportation with air conditioning</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Visit exclusive coffee farms outside the city</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Master barista workshop - learn to brew like a pro</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Gourmet Vietnamese lunch with coffee pairing</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Explore hidden local markets beyond tourist areas</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Premium coffee bean tasting session</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Personal dedicated guide</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Hotel pickup & drop-off service</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Take-home coffee gift bag</span>
                </li>
              </ul>
            </div>

            {/* Premium Features */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Premium Features</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">⭐</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Coffee Farm Visit</h3>
                    <p className="text-gray-600">See coffee beans being grown, harvested, and processed firsthand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">⭐</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Master Barista Workshop</h3>
                    <p className="text-gray-600">Learn professional brewing techniques from certified baristas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">⭐</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hidden Markets</h3>
                    <p className="text-gray-600">Explore authentic local markets that tourists rarely see</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">⭐</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Gourmet Experience</h3>
                    <p className="text-gray-600">Premium lunch with coffee pairing at a renowned local restaurant</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Itinerary */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Premium Tour Itinerary</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hotel Pickup (7:30 AM)</h3>
                    <p className="text-gray-600">Private pickup from your accommodation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Coffee Farm Visit (8:00-9:30 AM)</h3>
                    <p className="text-gray-600">Explore coffee plantations and learn about bean processing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Master Barista Workshop (10:00-11:30 AM)</h3>
                    <p className="text-gray-600">Learn professional brewing techniques and coffee appreciation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hidden Market Exploration (12:00-1:00 PM)</h3>
                    <p className="text-gray-600">Visit authentic local markets and meet vendors</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Gourmet Lunch (1:30-2:30 PM)</h3>
                    <p className="text-gray-600">Premium Vietnamese cuisine with coffee pairing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Premium Tasting Session (3:00-4:00 PM)</h3>
                    <p className="text-gray-600">Sample rare and premium coffee varieties</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    7
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hotel Drop-off (4:30 PM)</h3>
                    <p className="text-gray-600">Return to your accommodation with coffee gift bag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Your Premium Coffee Tour</h2>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Tour Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={bookingForm.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={bookingForm.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Hotel/Accommodation Address *
                  </label>
                  <input
                    type="text"
                    name="hotel"
                    value={bookingForm.hotel || ''}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your hotel address for pickup"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Coffee Experience Level
                  </label>
                  <select
                    name="experienceLevel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner - New to specialty coffee</option>
                    <option value="intermediate">Intermediate - Some coffee knowledge</option>
                    <option value="advanced">Advanced - Coffee enthusiast</option>
                    <option value="professional">Professional - Barista or coffee professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={bookingForm.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Any dietary restrictions, coffee preferences, or special requests?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-lg transition-all mb-4"
                >
                  Book Premium Coffee Tour - $75
                </button>

                {/* PayPal Payment */}
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-3 text-center">Or pay directly with PayPal:</p>
                  <div className="flex justify-center">
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_xclick" />
                      <input type="hidden" name="business" value="thestoriesguys@gmail.com" />
                      <input type="hidden" name="item_name" value="Premium Coffee & Market Tour - $75 per person" />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input type="hidden" name="amount" value="75.00" />
                      <input type="hidden" name="return" value="https://saigonese-hangout.com/booking/success" />
                      <input type="hidden" name="cancel_return" value="https://saigonese-hangout.com/booking/coffee/premium" />
                      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
                      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                  </div>
                </div>
              </form>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Premium Service:</strong> You will receive a confirmation email within 24 hours 
                  with detailed pickup information. Our guide will contact you the day before your tour 
                  to discuss your coffee preferences and any special arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumCoffee;
