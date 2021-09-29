import React, { useEffect } from 'react'
import NewsList from './NewsList'
import SearchBar from './SearchBar'
import { useGlobalContext } from './context'

const Home = () => {
  const {query, getNews} = useGlobalContext()

  useEffect(() => {
    getNews(query)
  },[])

    return (
        <div>
          <h2>HackerNews</h2> 
          <SearchBar />
          <NewsList />
        </div>
    )
}

export default Home
