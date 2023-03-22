import { Link } from "react-router-dom";
import logo from "../../assets/logo_monochrome.png";
import Modal from "../Modal/Modal";
import "./Header.css";
import * as React from "react";
const Header = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  return (
    <>
      <header>
        <div className="container">
          <div className=" main-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>

            <div className="dropdown">
              <button className="dropbtn">Menu</button>
              <div className="dropdown-content">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/news">News</Link>
                <Link to="/contact">Contact</Link>
                <a href="tel:123-456-7890">123-456-7890</a>
              </div>
            </div>
            <nav className="meni-dis">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/news">News</Link>
              <Link to="/contact">Contact</Link>
              <a href="tel:123-456-7890">123-456-7890</a>
            </nav>
          </div>
          <div className=" main-header">
            <p>Lorem</p>
            <h2>We make digital </h2>
            <h2>business simple</h2>
            <p className="text-width">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est hic
              iste quidem tempora error quas non, repellendus mollitia incidunt
              accusamus eos ad expedita?{" "}
            </p>
            <div className="video-btn">
              <p className="arrow">Explore Now</p>
              <button
                className="pulsingButton"
                onClick={() => setModalIsOpen(true)}
              >
                Watch the video
              </button>
            </div>
          </div>
        </div>
      </header>
      {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
    </>
  );
};

export default Header;
