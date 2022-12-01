import "./App.scss";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";
import Weather from "./components/weather";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <SearchBar />
        <Weather />
      </div>
    </div>
  );
}

export default App;
