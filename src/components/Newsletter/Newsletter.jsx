import "./Newsletter.css";
import * as React from "react";
const Newsletter = () => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const validateEmail = (e) => {
    e.preventDefault();
    if (String(email).toLowerCase().match(regex)) {
      // alert("You entered right email!");
      setSuccess(true);
      setError(false);
    } else {
      // alert("You entered wrong email!");
      setError(true);
      setSuccess(false);
    }
  };
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter-box">
          <div className="left-box">
            <h3 className="sub-text-box">Subscride to our</h3>
            <h3 className="sub-text-box">Newsletter!</h3>
            <p className="text-sub-box">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <form>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="error">You entered wrong email!</p>}
              {success && <p className="success">You entered right email!</p>}
            </label>

            <input
              type="submit"
              value="Subscribe"
              onClick={(e) => validateEmail(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
