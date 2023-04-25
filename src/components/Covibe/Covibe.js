import WorkTitle from "../UI/WorkTitle/WorkTitle";
import "./Covibe.scss";

export default function Covibe() {
  return (
    <div className="covibe">
      <div className="container">
        <div className="covibe__inner">
          <WorkTitle title="covibe" />
          <div className="covibe__desc">
            Co-working spaces for tech startups
          </div>
          <div className="covibe__cards">
            <div className="covibe__card">
              <WorkTitle title="client" />
              <div className="covibe__card-text">Covibe</div>
            </div>
            <div className="covibe__card">
              <WorkTitle title="role" />
              <div className="covibe__card-text">Product Designer</div>
            </div>
            <div className="covibe__card">
              <WorkTitle title="industry" />
              <div className="covibe__card-text">Co-working</div>
            </div>
            <div className="covibe__card">
              <WorkTitle title="duration" />
              <div className="covibe__card-text">2 Months</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
