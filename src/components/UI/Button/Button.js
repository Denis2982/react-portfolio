import './Button.scss';
import LetterIcon from '../../Icons/LetterIcon';

export default function Button() {
  return (
    <a href="/" className="btn">
        <LetterIcon />
        <span>hi@yourname.com</span>
    </a>
  )
}
