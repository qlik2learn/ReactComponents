import React from 'react';
import '../styles/SocialMediaIcons.css';

const SocialMediaIcons = () => {
  return (
    <ul>
      <li>
        <a className="facebook" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fab fa-facebook"></i> 
        </a>
      </li>
      <li>
        <a className="twitter" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fab fa-x-twitter"></i>
        </a>
      </li>
      <li>
        <a className="instagram" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fab fa-instagram"></i> 
        </a>
      </li>
       
    </ul>
  );
}

export default SocialMediaIcons;
