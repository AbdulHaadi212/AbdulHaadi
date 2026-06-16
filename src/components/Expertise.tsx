import React from "react";
import "../assets/styles/Expertise.scss";

const About: React.FC = () => {
  return (
    <section className="about-section" id="expertise">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
           I'm Abdul Haadi, a Software Engineer passionate about building scalable, high-performance, and user-focused digital solutions.

            I specialize in full-stack development, creating modern web applications that combine elegant design with robust functionality. From responsive front-end interfaces to secure and efficient back-end systems, I enjoy transforming complex ideas into seamless digital experiences.

            Driven by innovation and continuous learning, I constantly explore new technologies and development practices to deliver solutions that are reliable, impactful, and future-ready.

            Let's build something extraordinary together.

          </p>
          <a href="#contact" className="cta-btn">
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
