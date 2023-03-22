import OurFocus from "../OurFocus/OurFocus";
import CustomersBox from "../CustomersBox/CustomersBox";
import NewsBox from "../NewsBox/NewsBox";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="container">
      <OurFocus />
      <CustomersBox />
      <NewsBox />
    </div>
  );
};

export default MainContent;
