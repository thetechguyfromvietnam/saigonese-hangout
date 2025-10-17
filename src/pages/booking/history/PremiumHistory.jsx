import React, { useState } from 'react';

const PremiumHistory = () => {
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
    alert('Booking submitted for Premium History Tour! We\'ll contact you soon.');
    window.location.href = '/booking/success';
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-[#0f3e2c]">
            Premium History Tour
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Experience the ultimate Saigon history tour with private transportation, exclusive access, 
            and a traditional Vietnamese lunch. Perfect for history enthusiasts and those seeking a comprehensive experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tour Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-purple-600">$85</span>
                <span className="text-lg text-gray-600">per person • 6 hours</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-gray-800">What's Included:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Everything in Basic Tour</strong> - All major historical sites</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Private air-conditioned transportation</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Visit Reunification Palace - Former presidential palace</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Explore Jade Emperor Pagoda - Hidden Taoist temple</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Traditional Vietnamese lunch included</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Visit Cu Chi Tunnels - Underground network from the war</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Personal dedicated tour guide</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Hotel pickup & drop-off service</span>
                </li>
              </ul>
            </div>

            {/* Premium Features */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Premium Features</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">⭐</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Private Transportation</h3>
                    <p className="text-gray-600">Comfortable air-conditioned vehicle for your group only</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">⭐</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Exclusive Access</h3>
                    <p className="text-gray-600">Visit hidden gems and lesser-known historical sites</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">⭐</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Cultural Immersion</h3>
                    <p className="text-gray-600">Traditional lunch experience with local cuisine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">⭐</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Cu Chi Tunnels</h3>
                    <p className="text-gray-600">Unique experience exploring the underground tunnel network</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Itinerary */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Tour Itinerary</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hotel Pickup (8:00 AM)</h3>
                    <p className="text-gray-600">Private pickup from your accommodation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Colonial District (8:30-10:00 AM)</h3>
                    <p className="text-gray-600">Notre-Dame Cathedral, Central Post Office, Independence Palace</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">War History (10:30-12:00 PM)</h3>
                    <p className="text-gray-600">War Remnants Museum, Reunification Palace</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Traditional Lunch (12:30-1:30 PM)</h3>
                    <p className="text-gray-600">Authentic Vietnamese cuisine at local restaurant</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Cu Chi Tunnels (2:00-4:00 PM)</h3>
                    <p className="text-gray-600">Explore the underground tunnel network</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hotel Drop-off (4:30 PM)</h3>
                    <p className="text-gray-600">Return to your accommodation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Your Premium Tour</h2>
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6].map(num => (
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your hotel address for pickup"
                  />
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Any dietary requirements or special requests?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold text-lg transition-all mb-4"
                >
                  Book Premium History Tour - $85
                </button>

                {/* PayPal Payment */}
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-3 text-center">Or pay directly with PayPal:</p>
                  <div className="flex justify-center">
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_xclick" />
                      <input type="hidden" name="business" value="thestoriesguys@gmail.com" />
                      <input type="hidden" name="item_name" value="Premium History Tour - $85 per person" />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input type="hidden" name="amount" value="85.00" />
                      <input type="hidden" name="return" value="https://saigonese-hangout.com/booking/success" />
                      <input type="hidden" name="cancel_return" value="https://saigonese-hangout.com/booking/history/premium" />
                      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
                      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                  </div>
                </div>
              </form>

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Premium Service:</strong> You will receive a confirmation email within 24 hours 
                  with detailed pickup information. Our guide will contact you the day before your tour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumHistory;
