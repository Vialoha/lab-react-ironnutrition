
import React, { useState } from 'react';

function SearchBar(props) {

    const {searchQuery, onSearchChange} = props;

  return (
    <div className="search-bar">
        <p>Search</p>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;