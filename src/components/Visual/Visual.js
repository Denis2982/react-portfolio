import "./Visual.scss";
import visual1 from "../../assets/visual1.png";
import visual2 from "../../assets/visual2.png";
import visual3 from "../../assets/visual3.png";
import visual4 from "../../assets/visual4.png";
import visual5 from "../../assets/visual5.png";
import visual6 from "../../assets/visual6.png";

export default function Visual() {
  return (
    <div className="container visual__container">
      <div
        className="visual__title"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Visual Explorations
      </div>
      <div className="visual__cards">
        <div
          className="visual__card"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <img src={visual1} alt="card" />
        </div>
        <div
          className="visual__card"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img src={visual2} alt="card" />
        </div>
        <div
          className="visual__card"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img src={visual3} alt="card" />
        </div>
        <div
          className="visual__card"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <img src={visual4} alt="card" />
        </div>
        <div
          className="visual__card"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img src={visual5} alt="card" />
        </div>
        <div
          className="visual__card"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <img src={visual6} alt="card" />
        </div>
      </div>
    </div>
  );
}
