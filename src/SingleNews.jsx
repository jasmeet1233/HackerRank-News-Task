import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { useGlobalContext } from "./context";

/// filter se i'll take title and points.
// comments il take from firebase one

const SingleNews = () => {
    const [newsInfo, setNewsInfo] = useState([]);
    const [loading, setLoading] = useState('true')
    const {id} = useParams();
    console.log(id);

    const getSingleNews = async(id) => {
        const response = await fetch(
          `https://hn.algolia.com/api/v1/items/${id}`
        );
        const data = await response.json()
        setNewsInfo(data)
        setLoading(false)
    }
    
    useEffect(() => {
        getSingleNews(id)
    },[])

    // const movie 

    if(loading) return <p>Loading</p>
  return <div>
      <h2>{newsInfo.title}</h2>
        <h3>{newsInfo.points}</h3>
        <h4>Comments</h4>
      {
          (newsInfo.children).map((item) => {
              return <>{ReactHtmlParser(item.text)}</>;
          })
      }
  </div>;
};

export default SingleNews;
