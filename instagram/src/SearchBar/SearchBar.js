import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="search-bar-items">
        <div className="logo-icon" />
        <div className="logo-break" />
        <img className="logo-word" />

        <div className="searchbar-form">
          <div className="searchbar-hourglass" />
          <input className="top-searchbar" placeholder="Search" />
          <div className="searchbar-exit" />
        </div>

        <div className="icon-explore" />
        <div className="icon-notification" />
        <div className="icon-profile" />
      </div>
    </div>
  );
};

export default SearchBar;
