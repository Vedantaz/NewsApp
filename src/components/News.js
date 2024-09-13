import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const apiKey = process.env.REACT_APP_NEWS_API.trim();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
    //   document.title = `${capitalizeFirstLetter(props.category)} - NewsSnake`;
  };
  const updateNews = async () => {
    props.setProgress(10);

    // const url = `https://newsapi.org/v2/top-headlines?country=
    // ${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines/category=${props.category}?q=bitcoin&apiKey=${props.apiKey}`;

    setLoading(true);
    try {
      let data = await fetch(url);
      props.setProgress(30);

      let parsedData = await data.json();
      props.setProgress(70);

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsSnake`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=
    // ${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines/category=${props.category}?q=bitcoin&apiKey=${props.apiKey}`;
    setPage(page + 1);
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.log("Error fetching more news data : ", error);
    }
  };
  return (
    <>
      <h2
        className="text-center"
        src="/NewsBack.png"
        style={{ backgroundColor: "white", color: "black", margin: "66px 0px" }}
      >
        NewsSnake - Top {capitalizeFirstLetter(props.category)} Headlines{" "}
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles ? articles.length : 0} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  country: PropTypes.string,
};
export default News;
