import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">
        A selection of projects I’ve built
      </p>

      <div className="projects-grid">

        {/* Portfolio */}
        <div className="project-card">
          <img src="/projects/portfolio.png" alt="Portfolio" />

          <h2>Portfolio Website</h2>
          <p>
            A responsive portfolio website showcasing my skills, projects,
            and achievements with a clean interactive design.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Theerchana/portfolio" target="_blank">
              <FaGithub /> GitHub
            </a>
            <a href="#" target="_blank">
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

        {/* BookSwap Hub */}
        <div className="project-card">
          <img src="/projects/bookswap.png" alt="BookSwap Hub" />

          <h2>BookSwap Hub</h2>
          <p>
            A MERN stack platform for students to exchange, buy and sell
            textbooks with authentication and secure access.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Theerchana/textbook-exchange" target="_blank">
              <FaGithub /> GitHub
            </a>
            <a href="#" target="_blank">
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

        {/* Hue Mania */}
        <div className="project-card">
          <img src="/projects/huemania.png" alt="Hue Mania" />

          <h2>Hue Mania</h2>
          <p>
            Smart product recommendation system based on user color preferences
            to enhance personalized shopping experience.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node.js</span>
          </div>

          <div className="project-buttons">
            <a href="https://github.com/Theerchana/hue-mania" target="_blank">
              <FaGithub /> GitHub
            </a>
            <a href="#" target="_blank">
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

        {/* Stress Detection */}
        <div className="project-card">
          <img src="/projects/stress.png" alt="Stress Detection" />

          <h2>Stress Detection System</h2>
          <p>
            AI-based system using facial recognition and deep learning
            to detect stress levels in IT professionals.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Deep Learning</span>
            <span>OpenCV</span>
          </div>

          <div className="project-buttons">
            <a href="#" target="_blank">
              <FaGithub /> GitHub
            </a>
            <a href="#" target="_blank">
              <FaExternalLinkAlt /> Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
