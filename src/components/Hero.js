import React from 'react';
import heroImage from '../assets/Asset landing page.png';
import backgroundImage from '../assets/589.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-inner" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-title">
                  <h2>Kumami World</h2>
                </div>
                <div className="hero-text">
                  <p className="hero-tagline"><strong>Everything You Need. All in One App.</strong></p>
                  <p className="hero-description">
                    Discover the latest in Web3, AI, gaming, cryptocurrency outlook, global market news, and more—right at your fingertips. 
                    Stay informed with curated content, real-time news updates, and expert insights, all in one seamless platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src={heroImage} alt="Kumami Landing Page" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
