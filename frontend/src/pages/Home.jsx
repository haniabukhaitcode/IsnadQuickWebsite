import React from 'react';
import './Home.css'; // Make sure to create this file for the styles

const apps = [
  {
    id: 1,
    name: "Bugghunter",
    description: "Tracks and flags repeat misinformation offenders and alerts users.",
    image: "/assets/apps/bugghunter.jpg"
  },
  {
    id: 2,
    name: "TruthLens",
    description: "AI-powered tool analyzing media bias and manipulation.",
    image: "/assets/apps/truthlens.jpg"
  },
  {
    id: 3,
    name: "FactBurst",
    description: "Crowdsourced fact-checking platform powered by our volunteers.",
    image: "/assets/apps/factburst.jpg"
  },
  {
    id: 4,
    name: "SourceGuard",
    description: "Monitors source credibility and detects narrative changes.",
    image: "/assets/apps/sourceguard.jpg"
  },
  {
    id: 5,
    name: "BiasBuster",
    description: "Detects ideological tilt in news and social content.",
    image: "/assets/apps/biasbuster.jpg"
  },
];

export default function Home() {
  return (
    <div className="bg-dark text-light py-5">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <img src="/logo.svg" alt="ISNAD Logo" className="hero-logo mb-3" />
        <h1 className="hero-title">Stand Against Media Deception</h1>
        <p className="hero-subtitle">
          ISNAD empowers truth-seekers with tools to expose and counter false narratives.
        </p>
      </section>

      {/* Apps Showcase */}
      <section className="apps-section container py-5">
        <h2 className="section-title text-center mb-5">Our Integrity Tools</h2>
        {apps.map((app, i) => (
          <div key={app.id} className="row align-items-center mb-5 app-block">
            <div className={`col-md-6 ${i % 2 === 0 ? '' : 'order-md-2'}`}>
              <img src={app.image} alt={app.name} className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h3 className="app-name text-danger">{app.name}</h3>
              <p className="app-description">{app.description}</p>
              <button className="btn btn-outline-danger mt-2">Learn More</button>
            </div>
          </div>
        ))}
      </section>
    

    </div>
  );
}
