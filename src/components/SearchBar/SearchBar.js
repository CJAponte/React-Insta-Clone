import React from 'react';
import './SearchBar.css'


const SearchBar = props =>{
    return(
        <div className="search-bar">
            <div className="search-bar-items">
                <div className="logo-icon"></div>
                <div className="logo-break"></div>
                <img className="logo-word"/>

                <div className="searchbar-form">
                    <div className="searchbar-hourglass"></div>
                    <input className="top-searchbar"></input>
                    <div className="searchbar-exit"></div>
                </div>

                <img />
                <img />
                <img />
            </div>
        </div>
    )
}

export default SearchBar