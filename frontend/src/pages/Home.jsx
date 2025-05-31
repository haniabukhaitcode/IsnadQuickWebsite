import React from 'react';

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
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5 rounded">
        <img
          src="/logo.svg"
          alt="ISNAD Logo"
          style={{ height: '80px' }}
          className="mb-3"
        />
        <h1 className="display-4 fw-bold mb-3">Stand Against Media Deception</h1>
        <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
          ISNAD empowers truth-seekers with tools to expose and counter false narratives
        </p>
      </section>

      {/* Apps Section */}
      <section className="my-5">
        <h2 className="text-center mb-4">Our Truth-Telling Tools</h2>
        <div className="row">
          {apps.map(app => (
            <div key={app.id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-primary text-white">
                  <h3 className="card-title">{app.name}</h3>
                </div>
                <div className="card-body">
                  <p>{app.description}</p>
                  <ul className="list-group list-group-flush">
                    {app.features.map((feature, i) => (
                      <li key={i} className="list-group-item d-flex align-items-center">
                        <svg
                          className="bi bi-check-circle-fill text-success me-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 11.457 6.69l2.4 2.4a.5.5 0 00.708-.707l-2.4-2.4A7.978 7.978 0 018 0a8 8 0 018 8z" />
                          <path d="M6.293 10.707a1 1 0 001.414 0l3-3a.5.5 0 00-.708-.708L7 9.293 6.354 8.646a.5.5 0 00-.708.708l.647.647z" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-primary mt-3">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="my-5 bg-light p-4 rounded">
        <h2 className="text-center mb-4">Our Guardians of Truth</h2>
        <div className="row justify-content-center">
          {team.map((member, i) => (
            <div key={i} className="col-md-5 mb-4">
              <div className="card h-100 shadow-sm d-flex flex-row align-items-center p-3">
                {/* Replace src with your actual team images */}
                <img
                  src={`/assets/team/team${i + 1}.jpg`}
                  alt={member.name}
                  className="rounded-circle me-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <div>
                  <h4>{member.name}</h4>
                  <p className="text-primary mb-1">{member.role}</p>
                  <p className="mb-0">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
