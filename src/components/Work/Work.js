import "./Work.scss";
import ArrowIcon from "../Icons/ArrowIcon";
import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.png";

export default function Work() {
  return (
    <div className="container work__container">
      <a href="/" className="work__link">
        <ArrowIcon className="work__svg" />
        <span>Featured Work</span>
      </a>
      <div className="work__inner">
        <div className="work__inner-column">
          <div className="work__card-inner">
            <a href="/" className="work__card">
              <img src={work1} alt="" />
            </a>
            <div className="work__desc">
              <div className="work__text">InVersion</div>
            </div>
          </div>
          <div className="work__card-inner">
            <a href="/" className="work__card">
              <img src={work2} alt="" />
            </a>
            <div className="work__desc">
              <div className="work__text">InVersion</div>
            </div>
          </div>
        </div>
        <div className="work__inner-column">
        <div className="work__card-inner">
            <a href="/" className="work__card">
              <img src={work3} alt="" />
            </a>
            <div className="work__desc">
              <div className="work__text">InVersion</div>
            </div>
          </div>
          <div className="work__card-inner">
            <a href="/" className="work__card">
              <img src={work4} alt="" />
            </a>
            <div className="work__desc">
              <div className="work__text">InVersion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
