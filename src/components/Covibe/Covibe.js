import "./Covibe.scss";

export default function Covibe() {
  return (
    <div className="covibe">
      <div className="container">
        <div className="covibe__inner">
        <div className="covibe__title">Covibe</div>
        <div className="covibe__desc">Co-working spaces for tech startups</div>
        <div className="covibe__cards">
          <div className="covibe__card">
            <div className="covibe__card-title">client</div>
            <div className="covibe__card-text">Covibe</div>
          </div>
          <div className="covibe__card">
            <div className="covibe__card-title">role</div>
            <div className="covibe__card-text">Product Designer</div>
          </div>
          <div className="covibe__card">
            <div className="covibe__card-title">industry</div>
            <div className="covibe__card-text">Co-working</div>
          </div>
          <div className="covibe__card">
            <div className="covibe__card-title">duration</div>
            <div className="covibe__card-text">2 Months</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
