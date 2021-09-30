import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { useGlobalContext } from "./context";
import {AiFillHome} from 'react-icons/ai'


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


    if(loading) return <div className = 'loading'></div>
  return (
    <>
      <Link to="/">
        <div className="home">
          <AiFillHome size={23} />
        </div>
      </Link>
      <div className="news-parent">
        <h3>{newsInfo.title}</h3>
        <h5 className="info info-p">
          By {newsInfo.author} | {newsInfo.points} Points
        </h5>
        <h5>Comments</h5>
        <div className="line"></div>
        <div className="comments"></div>
        {newsInfo.children.map((item) => {
          return <div className="comments" key = {item.id}>{ReactHtmlParser(item.text)}</div>;
        })}
      </div>
    </>
  );
};

export default SingleNews;
