import React from 'react';

const HistoryTour = ({ theme }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">History Tour</h1>
        <p className="text-lg">Learn about the history and culture life of Sài Gòn.</p>
        <div className="mt-8">
          <a 
            href="/booking/history/basic" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg mr-4 transition-colors"
          >
            Book Basic Tour
          </a>
          <a 
            href="/booking/history/premium" 
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Book Premium Tour
          </a>
        </div>
      </div>
    </div>
  );
};

export default HistoryTour;
