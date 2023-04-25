import "./About.scss";
import aboutImage from "../../assets/about.png";
import Button from "../UI/Button/Button";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__desc" data-aos="fade-right" data-aos-duration="1500">
            <div className="about__title">
              Hi, I am Your Name A Product Designer based in City.
            </div>
            <div className="about__text">
              I help businesses and companies reach their goals by designing
              user-centric digital products & interactive experiences.
            </div>
            <Button />
          </div>
          <div className="about__image" data-aos="flip-left" data-aos-duration="1500">
            <img src={aboutImage} alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
}
