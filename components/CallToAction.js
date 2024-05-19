"use client";

import styles from "../styles/callToAction.module.css";
import Button from "../components/Button";
import Link from "next/link";

const CallToAction = ({ img, alt, heading, btnText, link, sourceLink }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt={alt} className={styles.img} />
        <p style={{fontSize:"12px"}}>image source: {sourceLink}</p>
      </div>
      <div className={styles.ctaContainer}>
        <h2 className={styles.h2Element}>{heading}</h2>
        <Button buttonText={btnText} links={link} />
      </div>
    </div>
  );
};

export default CallToAction;
