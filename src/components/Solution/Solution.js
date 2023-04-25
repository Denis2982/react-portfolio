import "./Solution.scss";
import solutionImg1 from "../../assets/solution1.png";
import solutionImg2 from "../../assets/solution2.png";
import WorkTitle from "../UI/WorkTitle/WorkTitle";

export default function Solution() {
  return (
    <div className="container solution">
      <div className="solution__card">
        <div
          className="solution__image"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <img src={solutionImg1} alt="solution" />
        </div>
        <div className="solution__desc">
          <WorkTitle title="solution 1" />
          <div
            className="solution__desc-text"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
      <div className="solution__card">
        <div
          className="solution__image"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <img src={solutionImg2} alt="solution" />
        </div>
        <div className="solution__desc">
          <WorkTitle title="solution 1" />
          <div
            className="solution__desc-text"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
    </div>
  );
}
