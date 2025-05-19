import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Brand Name */}
            <div className="footer-brand">
              <h3 className="brand-name">Kurukil</h3>
            </div>

            {/* Contact and Links */}
            <div className="footer-content">
              <div className="footer-info">
                <p>
                  A108 Adam Street<br />
                  NY 535022, Kochi<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links">
                  <a href="#"><i className="bx bxl-twitter" /></a>
                  <a href="#"><i className="bx bxl-facebook" /></a>
                  <a href="#"><i className="bx bxl-instagram" /></a>
                  <a href="#"><i className="bx bxl-skype" /></a>
                  <a href="#"><i className="bx bxl-linkedin" /></a>
                </div>
              </div>

              <div className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="/aboutus">About us</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © Copyright <strong><span>Kurukil</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
