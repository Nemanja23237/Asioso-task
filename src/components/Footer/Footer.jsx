import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section id="footer">
        <div className="main-footer">
          <div className="logoinfo" data-aos="fade-up">
            <p>Asioso</p>
            <h3 className="footer-sub">Contact us.</h3>
            <h3 className="footer-sub">Let's Talk.</h3>
          </div>
          <div className="com " data-aos="fade-up">
            <h1>Resurce</h1>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="com " data-aos="fade-up">
            <h1>Where we are</h1>
            <ul>
              <li>
                <a href="#">Veljka Dugosevica54</a>
              </li>
              <li>
                <a href="#">Beograd 11050</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="copyright">
        <p>&copy; Copyright 2023 Asioso</p>
      </div>
    </footer>
  );
};

export default Footer;
