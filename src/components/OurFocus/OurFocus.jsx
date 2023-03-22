import "./OurFocus.css";

const OurFocus = () => {
  return (
    <div className="focus">
      <p className="sub-title">Where can I see</p>
      <h2 className="title">Our focus</h2>
      <div className="focus-box">
        <div className="overlay">
          <div className="box-content box-content-1">
            <h3>Customer</h3>
            <p>Lorem ipsum dolor sit </p>
            <button className="btn-read">Read more</button>
          </div>
        </div>

        <div className="box-content box-content-2">
          <h3>Content</h3>
          <p>Lorem ipsum dolor sit </p>
          <button className="btn-read">Read more</button>
        </div>
        <div className="box-content box-content-3">
          <h3>Touchpoints</h3>
          <p>Lorem ipsum dolor sit </p>
          <button className="btn-read">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default OurFocus;
