import React, { useState } from "react";

const SearchBar = () => {
  const [search, updateSearch] = useState("");
  const [submitted, updateSubmit] = useState("false");

  const searchForRecipes = (event) => {
    event.preventDefault();

    fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "HwpyZ2T4YPmshAWuYY6kK9VBbjA5p1I1ETtjsnjKbUzNbr9tsh",
          "x-rapidapi-host": "tasty.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateSubmit(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
        <button id="search-bar-submit" onClick={searchForRecipes}>
          Yum
        </button>
      </h3>
    </div>
  );
};

export default SearchBar;
