import React, { useState } from "react";
import "../styles/Search.css";

function Search(props) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(keyword);
  };

  return (
    <form onSubmit={handleSubmit} id="searchAPI">
      <input
        id="term"
        className="search"
        required
        type="search"
        value={props.keyword}
        placeholder="search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input
        className="submitStyle"
        type="submit"
        value="Search"
        onClick={() => props.setCurrentPage(1)}
      />
    </form>
  );
}

export default Search;
