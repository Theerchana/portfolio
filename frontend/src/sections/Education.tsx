import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h1 className="education-title">Education</h1>
      <p className="education-subtitle">My academic journey</p>

      <div className="education-timeline">

        {/* MCA */}
        <div className="edu-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <div className="edu-content">
            <h3>Master of Computer Applications </h3>
            <span className="edu-year">2024 – 2026</span>
            <p>
              M. Kumarasamy College of Engineering
              <br />
              Karur
            </p>
            <p>CGPA - 8.04</p>
          </div>
        </div>

        {/* UG */}
        <div className="edu-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <div className="edu-content">
            <h3>Bachelor of Computer Applications</h3>
            <span className="edu-year">2021 – 2024</span>
            <p>
              MIT College of Arts and Science for Women
              <br />
              Musiri
            </p>
            <p>CGPA - 8.22</p>
          </div>
        </div>

        {/* 12th */}
        <div className="edu-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <div className="edu-content">
            <h3>Higher Secondary Education</h3>
            <span className="edu-year">2020 – 2021</span>
            <p>
              Sowdambikka Group of School
              <br />
              Thottiyam
            </p>
            <p>Percentage - 79.8</p>
          </div>
        </div>

        {/* 10th */}
        <div className="edu-card">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>
          <div className="edu-content">
            <h3>Secondary School </h3>
            <span className="edu-year">2018 – 2019</span>
            <p>
              Little Angels Matric Hr. Sec School
              <br />
              Namakkal
            </p>
            <p>Percentage - 72.8</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
