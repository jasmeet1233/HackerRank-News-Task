import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { FcSearch } from "react-icons/fc";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const { searchHandler, query } = useGlobalContext();
  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler(searchText);
      }}
    >
      <h2>Search HackerNews</h2>
      <div className = 'parent-flex'>
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="searchBtn">
          <FcSearch size={30} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
