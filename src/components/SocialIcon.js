import React from 'react';
import '../styles/SocialIcons.css';

const SocialIcon = ({ iconName, bgColor, hoverBgColor }) => {
  const handleHover = (e) => {
    e.currentTarget.style.setProperty('--bg-color', bgColor);
    e.currentTarget.style.setProperty('--hover-bg-color', 
    hoverBgColor);
  };

  const handleLeave = (e) => {
    e.currentTarget.style.removeProperty('--bg-color');
    e.currentTarget.style.removeProperty('--hover-bg-color');
  };

  return (
    <li className="item">
      <a
        href="#"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <i className={`fab fa-${iconName} icon`}></i>
      </a>
    </li>
  );
};

export default SocialIcon;