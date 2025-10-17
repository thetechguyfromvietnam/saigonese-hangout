import React, { useState } from 'react';

const BasicHistory = () => {
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
    alert('Booking submitted for Basic History Tour! We\'ll contact you soon.');
    window.location.href = '/booking/success';
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-[#0f3e2c]">
            Basic History Tour
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Discover Saigon's rich history in a 3-hour guided tour. Perfect for first-time visitors 
            who want to understand the city's cultural heritage and colonial past.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Tour Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-blue-600">$45</span>
                <span className="text-lg text-gray-600">per person • 3 hours</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-gray-800">What's Included:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Visit Notre-Dame Cathedral Basilica - Iconic French colonial architecture</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Explore Central Post Office - Historic building designed by Gustave Eiffel</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Walk through Independence Palace - Symbol of Vietnam's reunification</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Discover War Remnants Museum - Powerful exhibits about the Vietnam War</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Professional English-speaking guide</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Small group experience (max 8 people)</span>
                </li>
              </ul>
            </div>

            {/* Tour Highlights */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Tour Highlights</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Colonial Architecture</h3>
                  <p className="text-gray-600">
                    Marvel at stunning French colonial buildings that define Saigon's architectural heritage. 
                    Learn about the blend of French and Vietnamese architectural styles.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">War History</h3>
                  <p className="text-gray-600">
                    Gain insights into Vietnam's tumultuous past through authentic artifacts and personal stories 
                    from the War Remnants Museum.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Cultural Insights</h3>
                  <p className="text-gray-600">
                    Discover local customs, traditions, and the spirit that defines modern Vietnamese culture 
                    through historical landmarks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Book Your Tour</h2>
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any special requests or dietary requirements?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-all mb-4"
                >
                  Book Basic History Tour - $45
                </button>

                {/* PayPal Payment */}
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-3 text-center">Or pay directly with PayPal:</p>
                  <div className="flex justify-center">
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_xclick" />
                      <input type="hidden" name="business" value="thestoriesguys@gmail.com" />
                      <input type="hidden" name="item_name" value="Basic History Tour - $45 per person" />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input type="hidden" name="amount" value="45.00" />
                      <input type="hidden" name="return" value="https://saigonese-hangout.com/booking/success" />
                      <input type="hidden" name="cancel_return" value="https://saigonese-hangout.com/booking/history/basic" />
                      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
                      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                  </div>
                </div>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> You will receive a confirmation email within 24 hours. 
                  Please arrive 15 minutes before your scheduled tour time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicHistory;
