import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-[#0f3e2c]">Blog</h1>
        <p className="text-lg text-gray-700 mb-10">Stories, tips, and guides for exploring Saigon.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <article key={i} className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2 text-[#0f3e2c]">Sample Post {i}</h2>
              <p className="text-gray-700 mb-4">Coming soon: curated recommendations and insider tips for your Saigon trip.</p>
              <span className="text-sm text-gray-500">Stay tuned!</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;


