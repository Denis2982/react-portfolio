import Button from "../UI/Button/Button";
import "./Contact.scss";

export default function Contact() {
  return (
    <div className="container contact__container">
      <div
        className="contact__title"
        data-aos="zoom-in-down"
        data-aos-duration="1000"
      >
        Contact Me
      </div>
      <div
        className="contact__desc"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        If you are looking to hire a product designer, I’m currently available
        for freelance work
      </div>
      <div className="" data-aos="zoom-in-up" data-aos-duration="1000">
        <Button />
      </div>
    </div>
  );
}
