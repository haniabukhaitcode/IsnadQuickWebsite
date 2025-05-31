import React from 'react';

export default function About() {
  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        {/* Page Title */}
        <h1 className="text-center mb-4 text-danger fw-bold">About ISNAD</h1>

        {/* Company Story */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <img
              src="../assets/about-story.jpg"
              alt="Our Story"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-info">How It All Began</h3>
            <p>
              ISNAD was born from a movement of truth-seekers who were tired of misinformation
              dominating the media space. What started as a grassroots volunteer effort
              quickly evolved into a mission-driven organization with tools to combat media
              manipulation and restore public trust.
            </p>
          </div>
        </div>

        {/* CEO Section */}
        <div className="row mb-5 align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src="../assets/ceo.jpg"
              alt="Founder and CEO"
              className="img-fluid rounded-circle shadow"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-info">Meet the Founder</h3>
            <p>
             Ezz Eldin Dwidar is an Egyptian film director and screenwriter,
              born on March 30, 1980, in Damietta, Egypt. 
              He earned a Bachelor's degree in Art Education in 2000. 
              Dwidar began his career directing television advertisements 
              before transitioning to filmmaking.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <section className="bg-secondary p-5 rounded text-center text-white">
          <h2 className="text-danger mb-3">Our Mission</h2>
          <p className="lead mb-0">
            To empower people with truth-driven tools that restore integrity to public discourse.
            We stand as a shield against the disinformation machine—because truth matters.
          </p>
        </section>
          {/* Meet Our Managers Section */}
<section className="bg-dark text-white py-5">
  <div className="container text-center">
    <h2 className="mb-4">Meet Our Managers</h2>
    <div className="row justify-content-center">
      {/* Manager 1 */}
      <div className="col-md-4 mb-4">
        <div className="card bg-secondary text-white h-100 shadow">
          <img
            src="../assets/manager1.jpg" // Replace with your actual image path
            className="img-fluid rounded-top" style={{ objectFit: 'cover', width: '100%', height: 'auto', maxHeight: '400px' }}
            alt="Manager 1"
          />
          <div className="card-body">
            <h5 className="card-title">Hani1</h5>
            <p className="card-text">Manager1</p>
          </div>
        </div>
      </div>

      {/* Manager 2 */}
      <div className="col-md-4 mb-4">
        <div className="card bg-secondary text-white h-100 shadow">
          <img
            src="../assets/manager2.jpg"
            className="img-fluid rounded-top" style={{ objectFit: 'cover', width: '100%', height: 'auto', maxHeight: '400px' }}
            alt="Manager 2"
           
          />
          <div className="card-body">
            <h5 className="card-title">Hani2</h5>
            <p className="card-text">Manager2</p>
          </div>
        </div>
      </div>
      {/* Manager 3 */}
      <div className="col-md-4 mb-4">
        <div className="card bg-secondary text-white h-100 shadow">
          <img
            src="../assets/manager2.jpg"
            className="img-fluid rounded-top" style={{ objectFit: 'cover', width: '100%', height: 'auto', maxHeight: '400px' }}
            alt="Manager 2"
                     />
          <div className="card-body">
            <h5 className="card-title">Hani3</h5>
            <p className="card-text">Manager3</p>
          </div>
        </div>
      </div>
      {/* Add more managers below as needed */}
    </div>
  </div>
</section>
      </div>
    </div>
  );
}
