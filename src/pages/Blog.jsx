import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-[#0f3e2c]">Blog</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10">Stories, tips, and guides for exploring Saigon.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[1,2,3,4].map((i) => (
            <article key={i} className="bg-white shadow rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg transition">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[#0f3e2c]">Sample Post {i}</h2>
              <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">Coming soon: curated recommendations and insider tips for your Saigon trip.</p>
              <span className="text-xs sm:text-sm text-gray-500">Stay tuned!</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;


