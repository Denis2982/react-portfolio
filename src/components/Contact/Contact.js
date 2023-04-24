import Button from '../UI/Button/Button';
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="container contact__container">
      <div className="contact__title">Contact Me</div>
      <div className="contact__desc">
        If you are looking to hire a product designer, I’m currently available
        for freelance work
      </div>
      <Button />
    </div>
  );
}
