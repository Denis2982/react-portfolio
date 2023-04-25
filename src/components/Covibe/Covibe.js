import WorkTitle from "../UI/WorkTitle/WorkTitle";
import "./Covibe.scss";

export default function Covibe() {
  return (
    <div className="covibe">
      <div className="container">
        <div className="covibe__inner">
          <div data-aos="fade-up-right" data-aos-duration="1000">
            <WorkTitle title="covibe" />
          </div>
          <div
            className="covibe__desc"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            Co-working spaces for tech startups
          </div>
          <div className="covibe__cards">
            <div className="covibe__card" data-aos="zoom-out">
              <WorkTitle title="client" />
              <div className="covibe__card-text">Covibe</div>
            </div>
            <div className="covibe__card" data-aos="zoom-out" data-aos-delay="100">
              <WorkTitle title="role" />
              <div className="covibe__card-text">Product Designer</div>
            </div>
            <div className="covibe__card" data-aos="zoom-out" data-aos-delay="200">
              <WorkTitle title="industry" />
              <div className="covibe__card-text">Co-working</div>
            </div>
            <div className="covibe__card" data-aos="zoom-out" data-aos-delay="300">
              <WorkTitle title="duration" />
              <div className="covibe__card-text">2 Months</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
