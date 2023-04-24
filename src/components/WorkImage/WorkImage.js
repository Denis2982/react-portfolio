import './WorkImage.scss';
import WorkImg from '../../assets/work_image.png';

export default function WorkImage() {
  return (
    <div className="work__image">
        <img src={WorkImg} alt="bg" />
    </div>
  )
}
