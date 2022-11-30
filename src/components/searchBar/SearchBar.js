import "./SearchBar.scss";

import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <i>
          <AiOutlineSearch />
        </i>
        <input type="text" placeholder="Search City" />
      </div>
    </div>
  );
}

export default SearchBar;
