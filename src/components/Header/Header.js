import './Header.scss';
import LogoIcon from '../Icons/LogoIcon';

export default function Header() {
  return (
    <div className="header">
        <div className="container header__container">
            <div className="logo">
                <LogoIcon />
                <span>Logo Here</span>
            </div>
            <ul className="header__list">
                <li className="header__list-item">
                    <a href="/" className="header__list-link">Home</a>
                </li>
                <li className="header__list-item">
                    <a href="/" className="header__list-link">Work</a>
                </li>
                <li className="header__list-item">
                    <a href="/" className="header__list-link">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
