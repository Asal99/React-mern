import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-logo">Sweetora</h3>
          <p>
            Freshly baked happiness. Premium cakes and desserts made with love.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-links">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Sweetora. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
