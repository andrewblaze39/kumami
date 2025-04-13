import React from 'react';
import founderImg1 from '../assets/founder-placeholder-1.jpg';
import founderImg2 from '../assets/founder-placeholder-2.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero pt130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <h1 className="hero-title mb-4">Our Story</h1>
              <div className="hero-text">
                <p className="lead mb-4">
                  Founded in 2023, Kumami emerged from a vision to revolutionize the intersection of gaming, education, and blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title mb-4">Our Mission</h2>
              <p className="mission-text">
                At Kumami, we're dedicated to creating an ecosystem where gaming and learning converge. 
                Our platform empowers users to explore, learn, and earn while being part of a vibrant community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Meet Our Founders</h2>
          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="founder-card">
                <div className="founder-image">
                  <img src={founderImg1} alt="John Chen" className="img-fluid" />
                </div>
                <div className="founder-info">
                  <h3>John Chen</h3>
                  <p className="founder-title">Co-Founder & CEO</p>
                  <p className="founder-bio">
                    With over 15 years in gaming and blockchain, John leads Kumami's vision and strategy.
                    Previously founded successful gaming startups and led innovation at major tech companies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-4">
              <div className="founder-card">
                <div className="founder-image">
                  <img src={founderImg2} alt="Sarah Kim" className="img-fluid" />
                </div>
                <div className="founder-info">
                  <h3>Sarah Kim</h3>
                  <p className="founder-title">Co-Founder & CTO</p>
                  <p className="founder-bio">
                    A blockchain pioneer and gaming enthusiast, Sarah architects Kumami's technical infrastructure.
                    Previously led development teams at leading gaming and Web3 companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Values</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="value-card">
                <i className="fas fa-lightbulb value-icon"></i>
                <h3>Innovation</h3>
                <p>Pushing boundaries in gaming and education through cutting-edge technology</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card">
                <i className="fas fa-users value-icon"></i>
                <h3>Community</h3>
                <p>Building a vibrant, inclusive ecosystem for gamers and learners worldwide</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card">
                <i className="fas fa-shield-alt value-icon"></i>
                <h3>Trust</h3>
                <p>Maintaining transparency and security in all our operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
