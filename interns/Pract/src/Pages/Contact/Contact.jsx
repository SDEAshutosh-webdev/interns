import Button from "../../components/common/Button/Button";
import "../../styles/Contact.css";
import FaqAccordion from "./FaqAccordion";
function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions about your food order or catering services? We are here to help!</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info-card">
          <h2>Get In Touch</h2>
          <div className="info-item">
            <span>📍</span>
            <div>
              <strong>Address</strong>
              <p>Food Street, Amravati, Maharashtra</p>
            </div>
          </div>
          <div className="info-item">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p>+91 12345 67890</p>
            </div>
          </div>
          <div className="info-item">
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p>support@foodiehub.com</p>
            </div>
          </div>
          <div className="info-item">
            <span>🕒</span>
            <div>
              <strong>Opening Hours</strong>
              <p>10:00 AM – 11:00 PM (Everyday)</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Send Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows={4} required></textarea>
          <Button text="Send Message" variant="primary" type="submit" />
        </form>
      </div>
      <FaqAccordion />
    </div>
  );
}

export default Contact;
