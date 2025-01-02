import Link from "next/link";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-container">Logo</div>
        <div className="footer-contact-container">
          <div className="footer-contact-container__details">
            <p>Contact</p>
            <p>Street name</p>
            <p>Zip and city</p>
            <p>Phone number</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <ul className="footer-links__list">
            <li className="footer-links__list-item">
              <Link href={"/"} className="footer-links__list-item--link">
                Page name
              </Link>
              <span className="footer-links__list-item--separator">/</span>
            </li>
            <li className="footer-links__list-item">
              <Link href={"/books"} className="footer-links__list-item--link">
                Books
              </Link>
              <span className="footer-links__list-item--separator">/</span>
            </li>
            <li className="footer-links__list-item">
              <Link href={"/"} className="footer-links__list-item--link">
                Contact
              </Link>
              <span className="footer-links__list-item--separator">/</span>
            </li>
            <li className="footer-links__list-item">
              <Link href={"/"} className="footer-links__list-item--link">
                About us
              </Link>
              <span className="footer-links__list-item--separator">/</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
