import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="p-6 space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">ISNAD</h1>
        <p className="text-xl text-gray-600 mt-2">Standing against media disinformation with clarity and purpose.</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">We build volunteer-driven apps that expose and clarify false media narratives. Our tools empower users to identify and counter misinformation effectively and righteously.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-2xl shadow">
            <img src="/images/app1.png" alt="App 1" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-bold">TruthLens</h3>
            <p className="text-sm text-gray-600">Scan news and detect bias instantly with AI-powered analysis.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <img src="/images/app2.png" alt="App 2" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-bold">FactBurst</h3>
            <p className="text-sm text-gray-600">Crowdsourced fact-checking platform driven by volunteers.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl shadow">
            <img src="/images/app3.png" alt="App 3" className="w-full rounded-lg mb-2" />
            <h3 className="text-lg font-bold">MediaGuard</h3>
            <p className="text-sm text-gray-600">Monitor suspicious news and alert the community in real-time.</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <img src="/images/manager1.jpg" alt="Manager 1" className="rounded-full w-24 h-24 mx-auto mb-2" />
            <p className="font-medium">Fatima Yousri</p>
          </div>
          <div className="text-center">
            <img src="/images/manager2.jpg" alt="Manager 2" className="rounded-full w-24 h-24 mx-auto mb-2" />
            <p className="font-medium">Ali Mansour</p>
          </div>
          <div className="text-center">
            <img src="/images/manager3.jpg" alt="Manager 3" className="rounded-full w-24 h-24 mx-auto mb-2" />
            <p className="font-medium">Lina Haddad</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="p-6 space-y-6">
      <header>
        <h1 className="text-4xl font-bold">About ISNAD</h1>
      </header>
      <section>
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p className="text-gray-700 mt-2">ISNAD was born from the frustration of seeing media manipulation distort the truth. What began as a grassroots initiative quickly grew into a movement. Volunteers, developers, and truth-seekers united to build tools that challenge disinformation and restore clarity.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Our Founder</h2>
        <p className="text-gray-700 mt-2">Founded by Omar Zain, a journalist-turned-activist, ISNAD was his answer to a world in desperate need of transparent, honest reporting. His vision led to the creation of our first app and continues to guide our mission.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Our Purpose</h2>
        <p className="text-gray-700 mt-2">We exist to support truth-seekers, expose propaganda, and hold powerful narratives accountable. We believe truth is a right, not a luxury.</p>
      </section>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <nav className="flex justify-between p-4 bg-gray-800 text-white">
        <div className="font-bold text-lg">ISNAD</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
