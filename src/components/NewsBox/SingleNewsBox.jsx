import { Link } from "react-router-dom";
import "./SingleNewsBox.css";
const SingleNewsBox = ({ article }) => {
  return (
    <article>
      <Link
        to={`/details?title=${article.title}&description=${article.description}&imageURL=${article.urlToImage}`}
      >
        <img
          className="news-image-sing"
          src={article.urlToImage}
          alt="img-news"
        />
      </Link>

      <div className="singlebox">
        <p className="date-time">{article.publishedAt.substring(0, 10)}</p>
        <Link
          to={`/details?title=${article.title}&description=${article.description}&imageURL=${article.urlToImage}`}
        >
          <h3 className="link-news-title">{article.title}</h3>
        </Link>
        <p className="news-description">{article.description}</p>
        <a href={article.url} target="_blank" className="news-source-link">
          Link to source site
        </a>
      </div>
    </article>
  );
};

export default SingleNewsBox;
