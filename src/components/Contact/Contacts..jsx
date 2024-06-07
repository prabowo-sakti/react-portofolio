import { useEffect } from "react";
import lazySizes from "lazysizes";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  useEffect(() => {
    lazySizes.init();
  }, []);
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            className="lazyload"
            data-src={getImageUrl("contact/emailIcon.png")}
            alt="Email Icon"
          />
          <a href="mailto:admin@prabowosakti.com">
            <span className={styles.linkEmail}>admin@prabowosakti.com</span>
          </a>
        </li>
        <li className={styles.link}>
          <img
            className="lazyload"
            data-src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linked In Icon"
          />
          <a href="https://www.linkedin.com/in/prabowo-sakti/">Linked In</a>
        </li>
        <li className={styles.link}>
          <img
            className="lazyload"
            data-src={getImageUrl("contact/githubIcon.png")}
            alt="Github Icon"
          />
          <a href="https://github.com/prabowo-saktii">Github</a>
        </li>
      </ul>
    </footer>
  );
};
