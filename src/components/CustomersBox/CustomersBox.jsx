import "./CustomersBox.css";
import imgpimp from "../../assets/img-05.png";
import imgpimp1 from "../../assets/dots.png";
const CustomersBox = () => {
  return (
    <div className="customes-box">
      <div className="image-box">
        <img
          className="first-img"
          src={imgpimp}
          alt="pimp-image"
          width="500px"
        />
        <img
          className="sac-img"
          src={imgpimp1}
          alt="pimp-image"
          width="500px"
        />
      </div>
      <div className="text-box">
        <p className="sub-title box-stayle">lorem</p>
        <h3>Impressing our customers</h3>
        <div className="typewriter">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomersBox;
