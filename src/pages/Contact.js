import React from 'react';
import '../styles/Contact.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Whether you have a question about our menu, 
        need assistance with a reservation, or just want to provide feedback, please don't hesitate to reach out.
      </p>
      <div className="contact-details">
        <p><strong>Address:</strong> moqadisho,bakaaro</p>
        <p><strong>Phone:</strong> (252) 61000000</p>
        <p><strong>Email:</strong> info@zamzam.com</p>
      
      </div>
      <form className="contact-form">
        <h2>Send Us a Message</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;