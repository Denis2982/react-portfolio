import { Swiper, SwiperSlide } from "swiper/react";
import "./Projects.scss";
import "swiper/scss";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

export default function Projects() {
  return (
    <div className="container project__container">
      <div
        className="project__title"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Personal Projects
      </div>
      <Swiper slidesPerView={3} spaceBetween={24} grabCursor={true} loop={true}>
        <SwiperSlide>
          <img src={project1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
