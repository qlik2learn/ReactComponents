import React from 'react';
import '../styles/ProfileCard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <div className="img"><img src="https://unsplash.it/200/300" alt="Profile"/></div>
          <div className="cardContent">
            <h3>John Fansi<br /><span>Software Engineer</span></h3>
          </div>
        </div>
        <ul className="social-icon">
          <li style={{ '--i': 1 }}>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          </li>
          <li style={{ '--i': 2 }}>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </li>
          <li style={{ '--i': 3 }}>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </li>
        </ul>
      </div>
      <div className="card">
        <div className="content">
          <div className="img"><img src="https://unsplash.it/200/400" alt="Profile"/></div>
          <div className="cardContent">
            <h3>Alice Swift<br /><span>Marketing Manager</span></h3>
          </div>
        </div>
        <ul className="social-icon">
          <li style={{ '--i': 1 }}>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          </li>
          <li style={{ '--i': 2 }}>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </li>
          <li style={{ '--i': 3 }}>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
