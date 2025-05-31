import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl">
            How a small group of truth-seekers became a movement
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">The Spark</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In 2018, our founder Omar Zain witnessed first-hand how a fabricated news story 
              destroyed an innocent family's reputation. Despite later being debunked, the original 
              false narrative remained dominant in search results and public perception.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">The Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              ISNAD was born from a simple idea: Truth should spread faster than lies. We combine 
              cutting-edge technology with human wisdom to create tools that:
            </p>
            <ul className="mt-4 space-y-3 pl-5">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Expose manipulation techniques used by bad actors
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Amplify credible voices through our volunteer network
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Provide clear, shareable truth-packets that debunk falsehoods
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Principles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-lg mb-2">Radical Transparency</h4>
                <p className="text-gray-600">
                  We show our work - every claim is backed by verifiable sources and methodology
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-lg mb-2">Non-Partisan</h4>
                <p className="text-gray-600">
                  We follow the truth regardless of political or ideological lines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}