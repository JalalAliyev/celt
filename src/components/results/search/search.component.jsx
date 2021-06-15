import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';

import './search.style.scss';

const Search = ({ results, updateResults }) => {
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (!!search || focus) {
      const filteredResults = results.filter((result) => {
        return result.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      updateResults(filteredResults);
    }
  }, [search, focus, results, updateResults]);

  return (
    <div className="search">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setFocus(true)}
        />
        <BsSearch />
      </div>
    </div>
  );
};

export default Search;
