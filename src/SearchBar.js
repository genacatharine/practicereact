import React, { useState } from "react";

const SearchBar = () => {
  const [search, updateSearch] = useState("");

  return (
    <div id="search-bar">
      <label>What new recipe shall I make today?</label>
      <input
        type="text"
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
        placeholder="Enter food I'm craving here"
      ></input>
    </div>
  );
};

export default SearchBar;
