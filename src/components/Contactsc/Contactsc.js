import "./Contactsc.scss";

export default function Contactsc() {
  return (
    <div className="container contacts__container">
      <h1 className="contacts__title">Contacts</h1>
      <ul className="contacts__list">
        <li className="contacts__list-item">
          <h2 className="contacts__list-title">Location</h2>
          <p>Kharkov, Ukraine</p>
        </li>
        <li className="contacts__list-item">
          <h2 className="contacts__list-title">Telegram / WhatsApp</h2>
          <p>
            <a href="tel:+79051234567">+3 (063) 123-45-67</a>
          </p>
        </li>
        <li className="contacts__list-item">
          <h2 className="contacts__list-title">Email</h2>
          <p>
            <a href="mailto:hi@yourname.com">hi@yourname.com</a>
          </p>
        </li>
      </ul>
    </div>
  );
}
