import "./SearchBar.scss";

import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchAsyncWeather } from "../../redux/slices/weatherSlice";
import { useDebounce } from "use-lodash-debounce";

function SearchBar() {
  const [inputValue, setInputValue] = useState("istanbul");
  const dispatch = useDispatch();
  const debouncedValue = useDebounce(inputValue, 1500);

  useEffect(() => {
    dispatch(fetchAsyncWeather(debouncedValue));
  }, [dispatch, debouncedValue]);

  const formOnSubmit = (e) => {
    e.preventDefault();
  };

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <form onSubmit={formOnSubmit}>
          <i>
            <AiOutlineSearch />
          </i>
          <input
            type="text"
            placeholder="Search City"
            value={inputValue}
            onChange={inputOnChange}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
