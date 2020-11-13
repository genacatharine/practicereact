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
      .then((data) =>
        data.results.forEach((result) => {
          updateSearch(result.thumbnail_url);
          updateSubmit(true);
          console.log(result);
        })
      )
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div id="search-bar-container">
      <h3>
        <label>Choose A Country</label>
        <br></br>
        {/* <input
          id="search-bar-input"
          type="text"
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
          placeholder="Enter food I'm craving here"
        ></input> */}
        <button id="search-bar-submit" onClick={searchForRecipes}>
          Mexico 🇲🇽
        </button>
        <button id="search-bar-submit" onClick={searchForRecipes}>
          Thailand 🇹🇭
        </button>
        <button id="search-bar-submit" onClick={searchForRecipes}>
          France 🇫🇷
        </button>
      </h3>
      {submitted === "false" ? null : (
        <img id="img" src={search} alt="recipe" />
      )}
    </div>
  );
};

export default SearchBar;
