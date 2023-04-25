import "./Lounch.scss";
import lounchImg from "../../assets/lounch.png";

export default function Lounch() {
  return (
    <div className="lounch">
      <div className="container">
        <div className="lounch__title">launch prototype</div>
      </div>
      <img data-aos="fade-zoom-in" 
      data-aos-duration="3000"   src={lounchImg} alt="lounch" />
    </div>
  );
}
