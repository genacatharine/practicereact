import React, { useState } from "react";

const SearchBar = () => {
  const [search, updateSearch] = useState("");
  const [submitted, updateSubmit] = useState("false");

  const searchForCoffee = (event) => {
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
  const searchForHikes = (event) => {
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
  const searchForRestaurants = (event) => {
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
      {submitted === "false" ? null : (
        <img id="img" src={search} alt="recipe" />
      )}
    </div>
  );
};

export default SearchBar;
