"use client";

import callToAction from "../styles/callToAction.module.css";
import styles from "../styles/callToAction.module.css";
import Button from "../components/Button";

const CallToAction = ({ img, alt, heading, btnText, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt={alt} className={styles.img} />
      </div>
      <div className={styles.ctaContainer}>
        <h2 className={styles.h2Element}>{heading}</h2>
        <Button buttonText={btnText} links={link} />
      </div>
    </div>
  );
};

export default CallToAction;
