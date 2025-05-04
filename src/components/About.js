import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hello! I'm <strong>Utsav Kumar Datta</strong>, a passionate backend developer with expertise in 
          <strong> Java, Spring Boot, Microservices</strong>, and <strong>MySQL</strong>. 
          I enjoy designing scalable systems and integrating technologies like Kafka to build robust applications.
        </p>
        <p>
          I'm currently working on exciting projects involving real-time data tracking and system orchestration.
        </p>
        <p>
          When I'm not coding, you'll find me immersed in <strong>aquascaping</strong>, 
          nurturing my <strong>garden</strong>, or sketching ideas in my notebook. 
          These creative outlets keep me balanced and fuel my inspiration for building meaningful tech solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
