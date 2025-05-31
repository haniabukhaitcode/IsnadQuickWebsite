import React from 'react';
import { Link } from 'react-router-dom';

const apps = [
  {
    id: 1,
    name: "TruthLens",
    description: "AI-powered media analysis that detects bias and manipulation in real-time",
    features: [
      "Instant credibility scoring",
      "Source verification",
      "Narrative tracking"
    ]
  },
  {
    id: 2,
    name: "FactBurst",
    description: "Crowdsourced fact-checking platform powered by our volunteer network",
    features: [
      "Community verification",
      "Visual evidence mapping",
      "Trending alerts"
    ]
  }
];

const team = [
  {
    name: "Omar Zain",
    role: "Founder & CEO",
    bio: "Former investigative journalist with 15 years experience in media analysis"
  },
  {
    name: "Fatima Yousri",
    role: "CTO",
    bio: "AI ethics specialist from MIT Media Lab"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <img 
            src="/logo.svg" 
            alt="ISNAD Logo" 
            className="h-24 mx-auto mb-6"
          />
          <h1 className="text-5xl font-bold mb-4">Stand Against Media Deception</h1>
          <p className="text-xl max-w-2xl mx-auto">
            ISNAD empowers truth-seekers with tools to expose and counter false narratives
          </p>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Truth-Telling Tools
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {apps.map(app => (
            <div key={app.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-500 p-6 text-white">
                <h3 className="text-2xl font-bold">{app.name}</h3>
                <p>{app.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {app.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Guardians of Truth
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                <img 
                  src={`/assets/team/team${i+1}.jpg`} 
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}