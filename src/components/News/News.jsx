import "./News.css";
import * as React from "react";
import SingleNewsBox from "../NewsBox/SingleNewsBox";

const News = () => {
  const [dataNews, setDataNews] = React.useState([]);
  const [category, setCategory] = React.useState("");
  React.useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=8fd7830d9d4147d1acc73e7c0e11ec74&category=${category}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataNews(data);
      });
  }, [category]);

  return (
    <section className="container">
      <div className="main-news-box">
        <div className="meni-category">
          <label>Select news category:</label>
          <select
            name="category"
            className="category"
            onChange={(e) => setCategory(e.target.value.toLowerCase())}
          >
            <option defaultValue="All" value="">
              All
            </option>
            <option defaultValue="business">Business</option>
            <option defaultValue="sports">Sports</option>
            <option defaultValue="technology">Technology</option>
          </select>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ea
            distinctio, at quia, ex iusto praesentium minus magni esse, officia
            cum deleniti ipsa delectus. Natus saepe voluptate impedit quos
            cumque?
          </p>
        </div>

        <div className="news-container">
          <h1 className="news-title">
            Category{" "}
            <span className="cat-news">{category ? category : "All"}</span>
          </h1>
          {dataNews &&
            dataNews?.articles?.map((article) => {
              return <SingleNewsBox article={article} key={article.title} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default News;
