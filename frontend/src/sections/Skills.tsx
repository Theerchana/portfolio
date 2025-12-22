import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">Skills</h1>

      {/* Row 1 */}
      <div className="skills-row">
        <div className="skill-card">
          <img src="/skills/html.png" alt="HTML" />
          <span>HTML</span>
        </div>

        <div className="skill-card">
          <img src="/skills/css.png" alt="CSS" />
          <span>CSS</span>
        </div>

        <div className="skill-card">
          <img src="/skills/javascript.png" alt="JavaScript" />
          <span>JavaScript</span>
        </div>

        <div className="skill-card">
          <img src="/skills/react.png" alt="React" />
          <span>React</span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="skills-row">
        <div className="skill-card">
          <img src="/skills/node.png" alt="Node.js" />
          <span>Node.js</span>
        </div>

        <div className="skill-card">
          <img src="/skills/express.png" alt="Express.js" />
          <span>Express.js</span>
        </div>

        <div className="skill-card">
          <img src="/skills/mongodb.png" alt="MongoDB" />
          <span>MongoDB</span>
        </div>

        <div className="skill-card">
          <img src="/skills/git.png" alt="Git" />
          <span>Git</span>
        </div>
      </div>

      {/* Row 3 */}
      <div className="skills-row center-row">
        <div className="skill-card">
          <img src="/skills/github.png" alt="GitHub" />
          <span>GitHub</span>
        </div>

        <div className="skill-card">
          <img src="/skills/vscode.png" alt="VS Code" />
          <span>VS Code</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
