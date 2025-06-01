import { Link } from 'react-router-dom';
export default function footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container text-center">
        <img
          src="../assets/logo.png"
          alt="ISNAD"
          style={{ height: '48px' }}
          className="mb-3"
        />
        <p>Standing between you and the disinformation machine</p>
        <div>
          <Link to="/about" className="mx-3 text-decoration-none text-white">
            Our Story
          </Link>
          <a href="#" className="mx-3 text-decoration-none text-white">
            Join Us
          </a>
          <a href="#" className="mx-3 text-decoration-none text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
