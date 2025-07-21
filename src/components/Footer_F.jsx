import React from "react";
import styles from "../assets/styles/Footer.module.css"; // Adjust the path as necessary
import {
  Facebook,
  Instagram,
  YouTube,
  LinkedIn,
  Twitter
} from "@mui/icons-material";

const Footer_F = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.subscribe}>
          <h2>Keep travelling all year round!</h2>
          <p>Subscribe to our newsletter for travel inspiration in your inbox.</p>
          <div className={styles.form}>
            <input type="text" placeholder="Full Name*" />
            <input type="email" placeholder="Email ID*" />
            <div className={styles.phoneInput}>
              <select>
                <option value="+91">🇮🇳 +91</option>
              </select>
              <input type="tel" placeholder="Phone No." />
            </div>
            <button>Subscribe</button>
          </div>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h4>Discover Us</h4>
            <ul>
              <li>Guests Reviews</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Tour Managers</li>
              <li>Sales Partners</li>
              <li>Become a Sales Partner</li>
              <li className={styles.hiring}>We're Hiring</li>
              <li>CSR Policy</li>
              <li>Create Your Travel Portfolio</li>
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <h4>Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>Leave Your Feedback</li>
              <li>How To Book</li>
              <li>FAQ</li>
              <li>Travel Deals</li>
              <li>COVID-19 Notice</li>
              <li>Singapore Visa</li>
              <li>Annual Return</li>
              <li>Disclosure</li>
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <h4>Resources</h4>
            <ul>
              <li>Tour Status</li>
              <li>Blog</li>
              <li>Podcasts</li>
              <li>Video Blogs</li>
              <li>Articles by abc </li>
              <li>Articles by bcd</li>
              <li>Articles by cde</li>
              <li>Travel Planners</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.socials}>
          <Facebook />
          <Instagram />
          <YouTube />
          <LinkedIn />
          <Twitter />
        </div>
        <p>© 2025 AsYouPlan Hospitality Pvt. Ltd. All Rights Reserved.</p>
        <p className={styles.note}>
          *Caution: Beware of Fake Promotions or Offers. Only trust emails ending with <strong>@asyouplan.com</strong> or <strong>@asyouplan.in</strong>.
        </p>
      </div>
    </footer>
  );
};

export default Footer_F;
