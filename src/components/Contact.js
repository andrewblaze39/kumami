import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="dg-contact pb130 pt130 mt-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="common-heading-2">
              <h2 className="mb30">Get In Touch</h2>
              <p className="mb30">Have questions? We'd love to hear from you!</p>
              
              <p className="mb-4">Email: <a href="mailto:team@kumami.world" className="contact-link">team@kumami.world</a></p>
              <a href="https://discord.gg/kumami" target="_blank" rel="noopener noreferrer" className="btn-main">
                <i className="fab fa-discord me-2"></i>
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
