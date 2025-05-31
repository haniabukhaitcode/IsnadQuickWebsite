import React from 'react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5 rounded mb-4">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Our Story</h1>
          <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
            How ISNAD was born from a passion to combat misinformation and protect the truth.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container">
        <h2 className="mb-3">The Idea</h2>
        <p>
          ISNAD started as a response to the growing crisis of fake news and manipulated media.
          Our founder, Omar Zain, envisioned a platform where volunteers and technology unite
          to provide accurate, trustworthy information.
        </p>

        <h2 className="mt-4 mb-3">Our CEO</h2>
        <p>
          Omar Zain is a former investigative journalist with over 15 years of experience.
          His dedication to truth and justice inspires everything we do at ISNAD.
        </p>

        <h2 className="mt-4 mb-3">Our Mission</h2>
        <p>
          We empower communities worldwide to fight back against misinformation through innovative
          apps, volunteer support, and educational outreach.
        </p>
      </section>
    </div>
  );
}