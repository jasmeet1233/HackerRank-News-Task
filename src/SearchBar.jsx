import React, { useState } from 'react'
import { useGlobalContext } from './context'

const SearchBar = () => {
    const [searchText, setSearchText] = useState('')

    const {searchHandler, query} = useGlobalContext();
    return (
      <form onSubmit = {(e) => {
        e.preventDefault();
        searchHandler(searchText)
      }
      }>
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type = 'submit'>Search</button>
      </form>
    );
}

export default SearchBar
