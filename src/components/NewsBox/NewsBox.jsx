import "./NewsBox.css";
import SingleNewsBox from "./SingleNewsBox";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import * as React from "react";

const NewsBox = () => {
  const [dataNews, setDataNews] = React.useState([]);
  React.useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=8fd7830d9d4147d1acc73e7c0e11ec74`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataNews(data);
      });
  }, []);

  return (
    <section>
      <p className="sub-title">Where can I see</p>
      <h2 className="title">News and Trends</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper"
        slidesPerView={3}
      >
        <div>
          {dataNews &&
            dataNews?.articles?.map((article) => {
              return (
                <SwiperSlide key={article.title}>
                  <SingleNewsBox article={article} />
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="swiper-mob"
        slidesPerView={1}
      >
        <div>
          {dataNews &&
            dataNews?.articles?.map((article) => {
              return (
                <SwiperSlide key={article.title}>
                  <SingleNewsBox article={article} />
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
    </section>
  );
};

export default NewsBox;
