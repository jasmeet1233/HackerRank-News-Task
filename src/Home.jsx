import React, { useEffect } from 'react'
import NewsList from './NewsList'
import SearchBar from './SearchBar'
import { useGlobalContext } from './context'

const Home = () => {
  const {query, getNews} = useGlobalContext()

  useEffect(() => {
    getNews('React')
  },[])

    return (
        <div> 
          <SearchBar />
          <NewsList />
        </div>
    )
}

export default Home
