import React from 'react';
import './Header.css';


function Header() {
  const profilePic = process.env.PUBLIC_URL + "/images/profilePic.png";
  const backgroundImage  = process.env.PUBLIC_URL + "/images/headerBackground.jpg";
  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="header-overlay">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Utsav Kumar Datta</h1>
        <p>Java | Spring Boot | Microservices | MySQL | Kafka</p>
      </div>
    </header>
  );
}

export default Header;