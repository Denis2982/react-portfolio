import "./Conclusion.scss";
import conclusionImg from '../../assets/conclusion.jpg';
import WorkTitle from "../UI/WorkTitle/WorkTitle";

export default function Conclusion() {
  return (
    <div className="container conclusion">
      <WorkTitle title='Conclusion' />      
      <div className="conclusion__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae aenean
        aliquet pellentesque lectus. Libero convallis velit, morbi nullam
        pellentesque quis. Massa nascetur in commodo posuere porttitor.
      </div>
      <img src={conclusionImg} alt="conclusion" />
    </div>
  );
}
