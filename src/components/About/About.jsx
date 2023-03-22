import CustomersBox from "../CustomersBox/CustomersBox";
import "./About.css";
import picman from "../../assets/img-ee.png";

const About = () => {
  return (
    <div className="about-box">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus
        excepturi quis natus eaque, reprehenderit voluptatibus cupiditate
        perferendis exercitationem deleniti nam et est ad mollitia qui quam
        ratione reiciendis eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus
        excepturi quis natus eaque, reprehenderit voluptatibus cupiditate
        perferendis exercitationem deleniti nam et est ad mollitia qui quam
        ratione reiciendis eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus
        excepturi quis natus eaque, reprehenderit voluptatibus cupiditate
        perferendis exercitationem deleniti nam et est ad mollitia qui quam
        ratione reiciendis eligendi.
      </p>
      <CustomersBox />
      <div className="box-about">
        <img src={picman} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          non sit, architecto molestiae asperiores animi quam aliquam quaerat
          consequuntur dicta ipsa voluptate blanditiis ab, odit quae deserunt
          dolore commodi optio. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Sint a quia, neque officiis ea animi iste possimus
          cumque tempore perspiciatis, assumenda quam pariatur dignissimos
          ratione modi impedit quis voluptas ex!
        </p>
      </div>
    </div>
  );
};

export default About;
