import { useEffect } from "react";
import lazySizes from "lazysizes";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  useEffect(() => {
    lazySizes.init();
  }, []);
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          data-src={getImageUrl("about/aboutImage.webp")}
          alt="Pria sedang ngoding di depan laptopnya"
          className="lazyload"
          id={styles.aboutImage}
          height="50%"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className="lazyload"
              data-src={getImageUrl("about/cursorIcon.png")}
              alt="cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Front End</h3>

              <p>
                Dengan saya mempelajari react selama 1 tahun, tentu saja saya
                sudah memiliki pengalaman membuat projek dengan react sebagai
                front-end developer
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className="lazyload"
              data-src={getImageUrl("about/serverIcon.png")}
              alt="Server Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
                Tentu saja, sebagai fullstack developer, saya memiliki
                pengalaman di backend selama 6 bulan untuk membuat fitur-fitur
                yang berguna.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className="lazyload"
              data-src={getImageUrl("about/uiIcon.png")}
              alt="cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Dengan pengalaman sebagai front-end, Tentu saja saya terbiasa
                membuat design landing page dan sistem desain secara baik.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className="lazyload"
              data-src={getImageUrl("about/seo.png")}
              alt="cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>SEO Specialist</h3>
              <p>
                Sebelum saya menjadi full-stack developer, saya sudah
                mempelajari SEO agar bisa meningkatkan, menganalisa, dan membuat
                konten yang berkualitas.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
