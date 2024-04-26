import React from 'react';
import SocialIcon from './SocialIcon';

const SocialIconsList = () => {
  return (
    <ul className="container_icon">
        <SocialIcon 
        iconName="facebook" 
        bgColor="#1877f2" 
        hoverBgColor="#395693" />
        <SocialIcon 
        iconName="x-twitter" 
        bgColor="#1da1f2" 
        hoverBgColor="#000000" />
        <SocialIcon 
        iconName="instagram" 
        bgColor="#c13584" 
        hoverBgColor="#e1306c" />
    </ul>
  );
};

export default SocialIconsList;
