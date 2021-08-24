import React from "react";

const SearchBar = () => {


  const searchForCoffee = (event) => { };
  const searchForHikes = (event) => { };
  const searchForRestaurants = (event) => { };

  return (
    <div id="search-bar-container">
      <h3>
        <label>Choose An Indulgence</label>
        <br></br>
        <button id="search-bar-submit" onClick={searchForCoffee}>
          Coffee
        </button>
        <button id="search-bar-submit" onClick={searchForHikes}>
          Hikes
        </button>
        <button id="search-bar-submit" onClick={searchForRestaurants}>
          Restaurants
        </button>
      </h3>
    </div>
  );
};

export default SearchBar;
