import React, { useState } from "react";

const SearchBar = () => {
  const [search, updateSearch] = useState("");

  return (
    <div id="search-bar-container">
      <h3>
        <label>What new recipe shall I make today?</label>
        <br></br>
        <input
          id="search-bar-input"
          type="text"
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          placeholder="Enter food I'm craving here"
        ></input>
        <button>Yum</button>
      </h3>
    </div>
  );
};

export default SearchBar;
