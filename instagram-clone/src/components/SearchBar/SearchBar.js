import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render(){
    return(
      <div className="searchBarContainer">
        <div className="navbar">
          <div className="logoImg">
          </div>
          <div className="divider">
          </div>
          <p className="logoName"> Instagram</p>
          <input className="searchBar" placeholder="search" />
          <div className="notifications">
            <div className="heart"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;
