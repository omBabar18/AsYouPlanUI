import React, { useEffect, useState } from "react";
import styles from "../assets/styles/CustomerReview.module.css";
import { IoStarSharp, IoChevronBack, IoChevronForward } from "react-icons/io5";
import profile1 from "../assets/styles/imgs/customer1.jpg";
import profile2 from "../assets/styles/imgs/customer2.jpg";
import profile3 from "../assets/styles/imgs/customer3.jpg";

const reviews = [
  {
    name: "Julya",
    quote:
      "Since 2014, we've helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation.",
    image: profile1,
    rating: 5,
    platform: "Rated by travellers on Facebook",
  },
  {
    name: "Aditya",
    quote:
      "This was hands down the best trip planner I’ve ever used. From booking to travel, everything was smooth and transparent!",
    image: profile2,
    rating: 5,
    platform: "Verified user on Google",
  },
  {
    name: "Nina",
    quote:
      "Amazing service and incredibly helpful support staff. I recommend them to everyone who wants a stress-free vacation.",
    image: profile3,
    rating: 4,
    platform: "Reviewed on TripAdvisor",
  },
];

const CustomerReview = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const nextReview = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
      setFade(true);
    }, 200);
  };

  const prevReview = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const { name, quote, image, rating, platform } = reviews[current];

  return (
    <div style={{ marginTop: "88px" }} id="customer-review">
      <section className={styles.testimonialSection}>
        <div
          className={`${styles.left} ${
            fade ? styles.fadeIn : styles.fadeOut
          }`}
        >
          <svg
            className={styles.quoteIcon}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4H4V20H12V4ZM28 4H20V20H28V4Z" fill="#a855f7" />
          </svg>

          <p className={styles.quoteText}>{quote}</p>

          <div className={styles.reviewer}>
            <div className={styles.line} />
            <h4>{name}</h4>
          </div>

          <div className={styles.rating}>
            {[...Array(rating)].map((_, i) => (
              <IoStarSharp key={i} className={styles.star} />
            ))}
          </div>
          <p className={styles.meta}>{platform}</p>

          <div className={styles.dots}>
            {reviews.map((_, idx) => (
              <span
                key={idx}
                className={idx === current ? styles.active : ""}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrent(idx);
                    setFade(true);
                  }, 200);
                }}
              />
            ))}
          </div>

          <div className={styles.arrows}>
            <button onClick={prevReview}>
              <IoChevronBack />
            </button>
            <button onClick={nextReview}>
              <IoChevronForward />
            </button>
          </div>
        </div>

        <div
          className={`${styles.right} ${
            fade ? styles.fadeIn : styles.fadeOut
          }`}
        >
          <div className={styles.blob}>
            <img src={image} alt={name} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
