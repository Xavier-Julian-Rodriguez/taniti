"use client";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <h3 className={styles.h3Element}>Navigation</h3>
        <ul className={styles.list}>
          <a className={styles.link} href="/">
            <li className={styles.li}>Home</li>
          </a>
          <a className={styles.link} href="/about">
            <li className={styles.li}>About</li>
          </a>
          <a className={styles.link} href="/things-to-do">
            <li className={styles.li}>Things To Do</li>
          </a>
          <a className={styles.link} href="/faq">
            <li className={styles.li}>FAQ</li>
          </a>
          <a className={styles.link} href="/contact">
            <li className={styles.li}>Contact</li>
          </a>
        </ul>
      </div>
      <div className={styles.author}>
        <h3 className={styles.h3Element}>Connect With Taniti</h3>
        <ul className={styles.list}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/xavierjulianrodriguez/"
          >
            <li className={styles.li}>LinkedIn</li>
          </a>
          <a
            className={styles.link}
            href="https://github.com/Xavier-Julian-Rodriguez"
          >
            <li className={styles.li}>GitHub</li>
          </a>
        </ul>
      </div>
      <div className={styles.author}>
        <h3 className={styles.h3Element}>Site Created By</h3>
        <ul className={styles.list}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/xavierjulianrodriguez/"
          >
            <li className={styles.li}>Xavier Rodriguez</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
