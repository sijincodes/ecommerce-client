import React from "react";

import "./SearchInput.scss";

function Search({ setSearchQuery, searchQuery }) {
  return (
    <>
    <div className="search">
      <input
        type="text"
        className="searchBoxInputBox"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for Brands"
      />
      </div>
    </>
  );
}

export default Search;
