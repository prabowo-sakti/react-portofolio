import React, { useEffect } from "react";
import lazySizes from "lazysizes";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Typed from "typed.js";

export const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am a front-end developer with 1 year of experience developing using React and the NextJS framework, and I am on my way to becoming a full-stack developer!",
      ],
      typeSpeed: 55,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    lazySizes.init();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, im Prabowo Sakti</h1>
        <p className={styles.description}>
          <span ref={el} />
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        data-src={getImageUrl("hero/prabowo-sakti.webp")}
        alt="Hero Section"
        id={styles.heroImg}
        className="lazyload"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
