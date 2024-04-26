import React from 'react';
import '../styles/Searchbar.css';

const Searchbar = ({ placeholder, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder || 'Search...'}
        onChange={onChange}
      />
      <button type="button">Search</button>
    </div>
  );
};

export default Searchbar;