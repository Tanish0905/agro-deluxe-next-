'use client';

import Image from 'next/image';
import './Footer.css';
import { useRouter } from "next/navigation";

const Footer = () =>
{
  const router = useRouter();

  return (
    <footer className="footer">
      <div className="footer-left">
        <Image
          src="/AgroDeluxeGrowersSVG.svg"
          alt="Agro Deluxe Growers Logo"
          width={160}
          height={80}
          className="footer-logo"
        />

        <p className="footer-desc">
          Unleash the full potential of your outdoor space.
        </p>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>

      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li
            onClick={() => router.push("/")}
            className="footer-link"
            role="link"
            tabIndex={0}
          >
              Home
          </li>
          <li
            onClick={() => router.push("/about")}
            className="footer-link"
            role="link"
            tabIndex={0}
          >
              About Us
          </li>
          <li
            onClick={() => router.push("/contact")}
            className="footer-link"
            role="link"
            tabIndex={0}
          >
            Contact
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Other pages</h3>
        <ul>
          <li
            onClick={() => router.push("/services")}
            className="footer-link"
            role="link"
            tabIndex={0}
          >
            Services
          </li>
          <li
            onClick={() => router.push("/products")}
            className="footer-link"
            role="link"
            tabIndex={0}
          >
            Products
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 onClick={() => router.push("/services")}
            className="footer-link"
            role="link"
          tabIndex={0}
        >
          Services
        </h3>
        <ul>
          <li>HORECA Partner</li>
          <li>Daily Fresh Supply</li>
          <li>Bulk Order Delivery</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
