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
            <i className="far fa-compass fa-lg"> </i>
            <i className="far fa-heart fa-lg"> </i>
            <i className="far fa-user fa-lg"> </i>

          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;
