import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">
        Feel free to reach out to me anytime
      </p>

      {/* CLICKABLE CONTACT INFO */}
      <div className="contact-info">

        <a href="tel:+919360171764">
          <FaPhone /> +91 9360171764
        </a>

        <a href="mailto:theershanas@gmail.com">
          <FaEnvelope /> theershanas@gmail.com
        </a>

        <a
          href="https://www.google.com/maps/search/Trichy,+India"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt /> Trichy, India
        </a>

      </div>

      {/* CONTACT FORM */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
