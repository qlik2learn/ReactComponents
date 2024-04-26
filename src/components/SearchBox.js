import React from 'react';
import '../styles/SearchBox.css'; 

const SearchBox = () => {
  return (
    <div>
      <div className="searchBox">
        <input className="searchInput" type="text" name="" placeholder="Search" />
        <button className="searchButton" href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
