import './Footer.scss';
import ViberIcon from '../Icons/ViberIcon';
import WorldIcon from '../Icons/WorldIcon';
import InIcon from '../Icons/InIcon';
import Twitter from '../Icons/Twitter';
import BeIcon from '../Icons/BeIcon';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer__copy">
            Made by <span>Your Name</span> — Copyright 2021
            </div>
            <div className="footer__social">
                <a href="/"><ViberIcon /></a>
                <a href="/"><WorldIcon /></a>
                <a href="/"><InIcon /></a>
                <a href="/"><Twitter /></a>
                <a href="/"><BeIcon /></a>
            </div>
        </div>
    </footer>
  )
}
