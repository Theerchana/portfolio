import { motion } from "framer-motion";
import { FaUser, FaCode } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">

      {/* TITLE */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
                   About Me
      </motion.h2>

      <p className="about-subtitle">
        Passionate developer building innovative solutions and solving real-world problems.
      </p>

      <div className="about-divider"></div>

      {/* INTRO */}
      <motion.p
        className="about-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
                Hey there! 👋 I'm Theerchana Subramani, a Master of Computer Applications student, passionate about building modern and scalable digital solutions. With expertise in React, JavaScript, Node.js, and MongoDB, I enjoy exploring new technologies.
      </motion.p>

      {/* HIGHLIGHT BUTTON */}
      <motion.div
        className="about-highlight"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
                  I like to build smart solutions for the future
      </motion.div>

      {/* CARDS */}
      <div className="about-cards">

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3><FaUser /> Who I Am</h3>
          <ul>
            <li>A passionate web developer.</li>
            <li>Interested in software engineering.</li>
            <li>Always learning new technologies.</li>
          </ul>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3><FaCode /> What I Do</h3>
          <ul>
            <li>Build responsive MERN applications.</li>
            <li>Develop clean & efficient UI.</li>
            <li>Optimize performance and usability.</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
