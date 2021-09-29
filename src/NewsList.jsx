import React, { useEffect } from 'react'
import { useGlobalContext } from './context';
import { Link } from "react-router-dom";

const NewsList = () => {
    const {query, isLoading, news} = useGlobalContext();

    if(isLoading) return <h3>Loading</h3>

    // const {author} = news 
    return (
        <div>
            {
            news.map((item) => {
                return (
                  <div className="flex-child">
                    <h3>{item.title}</h3>
                    <p className="genre">{item.author}</p>
                    <Link to={`/${item.objectID}`}>
                      <button>Know more</button>
                    </Link>
                  </div>
                );
            })
            }
        </div>
    )
}

export default NewsList
