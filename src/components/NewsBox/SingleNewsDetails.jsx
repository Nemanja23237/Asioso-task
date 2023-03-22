import { useNavigate } from "react-router-dom";
import "./SingleNewsDetails.css";

const SingleNewsDetails = () => {
  const url = window.location.search;
  const queryParams = new URLSearchParams(url);
  const title = queryParams.get("title");
  const description = queryParams.get("description");
  const imageURL = queryParams.get("imageURL");
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="single-news-cetails">
        <img className="image-details" src={imageURL} alt="news-details" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button className="btn-back" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default SingleNewsDetails;
