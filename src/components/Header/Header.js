import './Header.scss';
import LogoIcon from '../Icons/LogoIcon';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
        <div className="container header__container">
            <NavLink to="/" className="logo">
                <LogoIcon />
                <span>Logo Here</span>
            </NavLink>
            
            <ul className="header__list">
                <li className="header__list-item">
                    <NavLink to="/" className="header__list-link">Home</NavLink>
                </li>
                <li className="header__list-item">
                    <NavLink to="/works" className="header__list-link">Work</NavLink>                    
                </li>
                <li className="header__list-item">
                    <NavLink to="/contacts" className="header__list-link">Contact</NavLink>                    
                </li>
            </ul>
        </div>
    </div>
  )
}
