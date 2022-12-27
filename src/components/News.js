import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3c884887239b44c7a917f6b7915a6702&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=3c884887239b44c7a917f6b7915a6702&page=${page - 1}&pageSize=${
      props.pageSize
    }`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false);
    setPage(page - 1);
    setArticles(parsedData.articles);
  };

  const handleNextClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=3c884887239b44c7a917f6b7915a6702&page=${page + 1}&pageSize=${
      props.pageSize
    }`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false);
    setPage(page + 1);
    setArticles(parsedData.articles);
  };

  return (
    <div className="container my-3 ">
      <h1 className="text-center" style={{marginTop:"90px"}}>NewsMonkey - Top Headlines</h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 43) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          disabled={page > Math.ceil(totalResults / props.pageSize) - 1}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  category: "general",
  pageSize: "12",
};
News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
