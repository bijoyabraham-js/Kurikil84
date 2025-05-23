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
              <h3 className="brand-name">Kurikil</h3>
            </div>

            {/* Contact and Links */}
            <div className="footer-content">
              <div className="footer-info">
                <p>
                  <br />
                  <strong>Phone:</strong> +91 9633642123<br />
                  <strong>Email:</strong> kurikil84@gmail.com<br />
                </p>
                <div className="social-links">
                  {/* <a href="#"><i className="bx bxl-twitter" /></a> */}
                  {/* <a href="#"><i className="bx bxl-facebook" /></a> */}
                  <a href="https://www.instagram.com/iam_e3y/"><i className="bx bxl-instagram" /></a>
                  <a href="https://www.youtube.com/channel/UCKCtNh6KJ8oeVAl3h3Nz5-g"><i className="bx bxl-youtube" /></a>
                  <a href="https://open.spotify.com/artist/1kfF1kkbyruQ6Abd540tNL"><i className="bx bxl-spotify" /></a>
                </div>
              </div>

              <div className="footer-links mobile-hide">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="/aboutus">About us</a></li>
                  {/* <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li> */}
                  {/* <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li> */}
                  {/* <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © Copyright <strong><span>Kurikil</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
