import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Me, a chef 👩‍🍳</h1>
        <div id="intro">
          <h6>
            Hello there. I'm here to give you a dose of nostalgia. For all my
            80s babies in the room, remember those{" "}
            <a
              id="books-link"
              href="https://www.thriftbooks.com/series/give-yourself-goosebumps/41417/"
            >
              books
            </a>{" "}
            from R.L. Stine back in the day where you would choose your own
            adventure? Well this isn't that but it's similar. <br></br>
            <br></br>So close your eyes, and focus on your tongue, now focus on
            your taste buds. Now imagine a meal so delicious, so titillating, so
            scrumptious that you can't stop indulging in it.
            <br></br>
            <br></br>
            Where is that food's country of origin? Click on the country below
            to start your journey to find a new recipe to embark on. Bon
            Appetit!
          </h6>
        </div>

        <SearchBar />
      </header>
    </div>
  );
}

export default App;
