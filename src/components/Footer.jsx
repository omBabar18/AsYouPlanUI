import React from 'react';
import styles from '../assets/styles/Footer.module.css';

// Icons
import { SlEnvolopeLetter } from "react-icons/sl";
import PhoneIcon from '@mui/icons-material/Phone';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import GavelIcon from '@mui/icons-material/Gavel';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkIcon from '@mui/icons-material/Work';
import CampaignIcon from '@mui/icons-material/Campaign';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LanguageIcon from '@mui/icons-material/Language';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletter}>
        <div className={styles.newsLeft}>
          <h2><SlEnvolopeLetter className={styles.icon} /> Your Travel Journey Starts Here</h2>
          <p>Sign up and we’ll send the best deals to you</p>
        </div>
        <div className={styles.newsRight}>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Links Section */}
      <div className={styles.links}>
        <div>
          <h3>Contact Us</h3>
          <p> Toll Free Customer Care</p>
          <a href="tel:+918080102108">
            <PhoneIcon className={styles.linkIcon} /> +(91) 8080102108
          </a>
          <p> Need live support?</p>
          <a href="mailto:info@asyouplan.com">
            <EmailIcon className={styles.linkIcon} /> info@asyouplan.com
          </a>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li><a href="#"><BusinessCenterIcon className={styles.linkIcon} /> About Us</a></li>
            <li><a href="#"><WorkIcon className={styles.linkIcon} /> Careers</a></li>
            <li><a href="#"><CampaignIcon className={styles.linkIcon} /> Press</a></li>
          </ul>
        </div>

        <div>
          <h3>Support</h3>
          <ul>
            <li><a href="#"><PhoneIcon fontSize="small" className={styles.linkIcon} /> Contact</a></li>
            <li><a href="#"><PrivacyTipIcon fontSize="small" className={styles.linkIcon} /> Privacy Policy</a></li>
            <li><a href="#"><GavelIcon fontSize="small" className={styles.linkIcon} /> Terms and Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p>Copyright © 2025 by AsYouPlan Hospitality Private Limited</p>
        <div className={styles.bottomIcons}>
          <span><CurrencyRupeeIcon fontSize="small" className={styles.linkIcon} /> INR</span>
          <span><LanguageIcon fontSize="small" className={styles.linkIcon} /> English</span>
          <span><TravelExploreIcon fontSize="small" className={styles.linkIcon} /> AsYouPlan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
