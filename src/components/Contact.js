import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Imported LinkedIn icon
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/utsav', link: 'https://www.linkedin.com/in/utsavkumardatta/' },
    { icon: <FaGithub />, label: 'GitHub', value: 'github.com/CodenameOverlord', link: 'https://github.com/CodenameOverlord' },
    { icon: <FaEnvelope />, label: 'Email', value: 'utsavkumardatta@gmail.com', link: 'mailto:utsavkumardatta@gmail.com' },
  ];

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        {contactInfo.map((item, index) => (
          <div className="contact-card" key={index}>
            <div className="contact-icon">{item.icon}</div>
            <h3>{item.label}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
