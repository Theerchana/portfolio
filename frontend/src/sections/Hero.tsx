import { motion } from "framer-motion";
import "./Hero.css";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-wrapper">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="hero-title">Hi, I'm Theerchana Subramani</h1>

          {/* TYPING ANIMATION ONLY FOR SKILLS */}
          <p className="typing-text">
            Web developer | MERN Stack Developer | React | Node | MongoDB
          </p>

          {/* CONTACT + SOCIALS */}
          <div className="contact-vertical">
            <p><FaPhone className="icon" /> +91 9360171764</p>
            <p><FaEnvelope className="icon" /> theershanas@gmail.com</p>
            <p><FaMapMarkerAlt className="icon" /> Trichy, India</p>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/theerchana-subramani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" /> linkedin.com/in/theerchana-subramani\<br></br>
            </a>
            <br></br>
            {/* GitHub - FIXED (separate link) */}
            <a
              href="https://github.com/Theerchana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" /> github.com/Theerchana
            </a>
          </div>
          <br></br>
          {/* RESUME BUTTON */}
          <button
            className="resume-btn"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            View Resume
          </button>
        </motion.div>

        {/* RIGHT SIDE PROFILE IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/myphoto.jpg" alt="profile" />

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
