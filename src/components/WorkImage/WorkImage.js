import "./WorkImage.scss";
import WorkImg from "../../assets/work_image.png";

export default function WorkImage() {
  return (
    <div
      className="work__image"
      data-aos="fade-zoom-in" 
      data-aos-duration="3000"         
    >      
      <img src={WorkImg} alt="bg" />
    </div>
  );
}
