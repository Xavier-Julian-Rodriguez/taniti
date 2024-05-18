"use client";

import styles from "../../styles/footer.module.css";

const ContactPage = () => {
  return (
    <>
      <h1
        className={styles.h1}
        style={{
          fontSize: "3rem",
          color: "#000000",
          padding: "3rem 10% !important",
          backgroundColor: "#0a99ff",

        }}
      >
        Contact
      </h1>
      <div
        className={`${styles.container} ${styles.blue}`}
        style={{
          borderTop: "none",
          backgroundColor: "#0a99ff",
          width: "100%",
          padding: "1rem 10% 5rem 10%",
        }}
      >
        <div className={styles.linksContainer}>
          <h3 className={styles.h3Element}>Online Support Available 24/7</h3>
          <ul className={styles.list}>
            <a className={styles.link} href="/contact">
              <li className={styles.li}>Launch Chat</li>
            </a>
          </ul>
        </div>
        <div className={styles.author}>
          <h3 className={styles.h3Element}>Phone Customer Service</h3>
          <ul className={styles.list}>
            <a className={styles.link} href="/contact">
              <li className={styles.li}>+(1)800-123-4567</li>
              <li className={styles.li}>M-F: 7am EST - 12am EST</li>
              <li className={styles.li}>Sat-Sun: 8am EST - 10pm EST</li>
            </a>
          </ul>
        </div>
        <div className={styles.author}>
          <h3 className={styles.h3Element}>Email (1-2 Business Days)</h3>
          <ul className={styles.list}>
            <a className={styles.link} href="/contact">
              <li className={styles.li}>Open Email Form</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
