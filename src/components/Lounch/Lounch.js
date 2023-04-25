import "./Lounch.scss";
import lounchImg from "../../assets/lounch.png";

export default function Lounch() {
  return (
    <div className="lounch">
      <div className="container">
        <div className="lounch__title">launch prototype</div>
      </div>
      <img src={lounchImg} alt="lounch" />
    </div>
  );
}
