import "./Solution.scss";
import solutionImg1 from '../../assets/solution1.png';
import solutionImg2 from '../../assets/solution2.png';

export default function Solution() {
  return (
    <div className="container solution">
      <div className="solution__card">
        <div className="solution__image">
          <img src={solutionImg1} alt="solution" />
        </div>
        <div className="solution__desc">
          <div className="solution__desc-title">solution 1</div>
          <div className="solution__desc-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
      <div className="solution__card">
        <div className="solution__image">
          <img src={solutionImg2} alt="solution" />
        </div>
        <div className="solution__desc">
          <div className="solution__desc-title">solution 1</div>
          <div className="solution__desc-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
    </div>
  );
}
