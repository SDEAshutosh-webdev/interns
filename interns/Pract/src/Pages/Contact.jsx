import React from "react";
import "./Contact.css";
import FaqAccordion from "./FaqAccordion";

function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p className="contact-intro">
        Have questions about our food, delivery, or services?
        We would love to hear from you!
      </p>

      <div className="contact-content">

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            📍 <b>Address:</b> Food Street, Amravati, Maharashtra
          </p>

          <p>
            📞 <b>Phone:</b> +91 1234567810
          </p>

          <p>
            ✉️ <b>Email:</b> foodies@gmail.com
          </p>

          <p>
            🕒 <b>Opening Hours:</b> 10:00 AM - 11:00 PM
          </p>

        </div>

        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send Message</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
          />

          <button>
            Send Message
          </button>

        </div>

      </div>

      {/* Task 10 - FAQ Accordion */}
      <FaqAccordion />

    </div>
  );
}

export default Contact;