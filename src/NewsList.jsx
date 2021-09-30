import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const NewsList = () => {
  const { query, isLoading, news, isError } = useGlobalContext();

  if (isLoading) return <div className="loading"></div>;

  if (isError) return <div>Something went Wrong</div>;

  return (
    <section className="stories">
      {news.map((item) => {
        return (
          <div key={item.objectID} className="story">
            <h4>{item.title}</h4>
            <p className="info">
              {item.points} points | By {item.author} | {item.num_comments}{" "}
              comments{" "}
            </p>
            <Link to={`/${item.objectID}`} className="read-link">
              Read More
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default NewsList;
