import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you! Reach out to us using the form below.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon">📍</span>
                <div className="contact-details">
                  <h3>Address</h3>
                  <p>123 Cyber Street, Tech City</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">📧</span>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>contact@example.com</p>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+1 234 567 890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <section className="contact-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How can I contact customer support?</h3>
              <p className="faq-answer">You can reach us via email or phone mentioned above.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What are your working hours?</h3>
              <p className="faq-answer">We operate from 9 AM to 6 PM, Monday to Friday.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;