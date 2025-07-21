import React, { useState } from 'react';
import styles from '../assets/styles/Navbar.module.css';
import { IoPersonCircleSharp } from "react-icons/io5";
import { useNavigate, Link } from 'react-router-dom'; // ✅ FIXED: Import useNavigate

const Navbar = () => {
  const [showUserPanel, setShowUserPanel] = useState(false);
  const navigate = useNavigate(); // ✅ Hook now works

  return (
    <>
      <header className={styles.navbarWrapper}>
        <div className={styles.topBar}>
          <div className={styles.leftLinks}>
            <span>🌐 English ▼</span>
          </div>
          <div className={styles.rightLinks}>
            <Link to="/contact">Contact Us</Link>
            <a href="#">Help</a>
            <div className={styles.accountMenu}>My Bookings ▼</div>
            <div
              className={styles.userIcon}
              onClick={() => setShowUserPanel((prev) => !prev)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <IoPersonCircleSharp size={32} />
              {showUserPanel && (
                <div className={styles.userPanel}>
                  <div className={styles.userPanelAvatar}>
                    <IoPersonCircleSharp size={48} />
                  </div>
                  <div className={styles.userPanelContent}>
                    <div className={styles.userPanelName}>John Doe</div>
                    <div className={styles.userPanelEmail}>user@example.com</div>
                    <a href="#" className={styles.userPanelSignOut}>Sign Out</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.mainBar}>
          <div className={styles.logo}>AsYouPlan</div>
          <nav className={styles.navLinks}>
            <a href="#">Destinations</a>
            <a href="#">Trip Planner</a>
            <a href="#">Travel Deals</a>
            <a href="#">Experiences</a>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#customer-review">Customer Review</a>
          </nav>
          <div className={styles.actionItems}>
            <button
              className={styles.createBtn}
              onClick={() => navigate('/auth')}
            >
              Sign In / Sign Up
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
