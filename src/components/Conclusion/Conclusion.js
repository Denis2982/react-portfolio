import "./Conclusion.scss";
import conclusionImg from "../../assets/conclusion.jpg";
import WorkTitle from "../UI/WorkTitle/WorkTitle";

export default function Conclusion() {
  return (
    <div className="container conclusion">
      <div data-aos="zoom-in" data-aos-duration="1000">
        <WorkTitle title="Conclusion" />
      </div>
      <div
        className="conclusion__desc"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae aenean
        aliquet pellentesque lectus. Libero convallis velit, morbi nullam
        pellentesque quis. Massa nascetur in commodo posuere porttitor.
      </div>
      <img
        data-aos="zoom-out"
        data-aos-duration="1000"
        src={conclusionImg}
        alt="conclusion"
      />
    </div>
  );
}
