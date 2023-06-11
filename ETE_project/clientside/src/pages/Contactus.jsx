import React from 'react';
import '../components/css/Contactus.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactUsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <p>
        Have a question, feedback, or suggestion? We'd love to hear from you! Please feel free to reach out to us using the contact details below:
      </p>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>Email: info@mediumclone.com</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <span>Phone: +1 123 456 7890</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Address: 123 Main St, City, Country</span>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUsPage;
