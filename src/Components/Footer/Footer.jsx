import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/stacklyimg1.webp";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-section brand-section">
          <img
            src={logo}
            alt="TravelGo Logo"
            className="footer-logo"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <p>
            Explore breathtaking destinations and create unforgettable
            travel memories with TravelGo.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> Hyderabad, India</p>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <p><FaEnvelope /> stackly@travelgo.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Stackly. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;