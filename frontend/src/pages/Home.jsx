import React from 'react';
import './Home.css'; // Make sure to create this file for the styles

const apps = [
  {
    id: 1,
    name: "Bugghunter",
    description: "Tracks and flags repeat misinformation offenders and alerts users.",
    image: "../assets/bugghunter.jpg"
  },
  {
    id: 2,
    name: "Isnad Influencer",
    description: "AI-powered tool analyzing media bias and manipulation.",
    image: "../assets/influencer.jpg"
    
  },
  {
    id: 3,
    name: "TruthLens",
    description: "Crowdsourced fact-checking platform powered by our volunteers.",
    image: "../assets/truthlens.jpg"
  },
  {
    id: 4,
    name: "SourceGuard",
    description: "Monitors source credibility and detects narrative changes.",
    image: "../assets/sourceguard.jpg"
  },
  {
    id: 5,
    name: "BiasBuster",
    description: "Detects ideological tilt in news and social content.",
    image: "../assets/biasbuster.jpg"
  },
];
export default function Home() {
  return (
    <div className="bg-dark text-light py-5">
      {/* Hero Section */}
      <section className="hero-section text-center mb-5">
        <div className="hero-logo-wrapper">
          <img src="../assets/logo.png" alt="ISNAD Logo" className="hero-logo" />
        </div>
        <h1 className="hero-title">Stand Against Media Deception</h1>
        <p className="hero-subtitle">
          ISNAD empowers truth-seekers with tools to expose and counter false narratives.
        </p>
      </section>

      {/* Apps Showcase */}
      <section className="container">
        <h2 className="text-center mb-5">Our Integrity Tools</h2>
        <div className="apps-container">
          {apps.map((app, index) => (
            <div key={app.id} className={`app-card ${index % 2 === 0 ? '' : 'reverse'}`}>
              <div className="app-image">
                <img src={app.image} alt={app.name} />
              </div>
              <div className="app-content">
                <h3 className="text-danger">{app.name}</h3>
                <p>{app.description}</p>
                <button className="btn btn-outline-danger">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}