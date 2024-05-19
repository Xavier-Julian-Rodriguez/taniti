"use client";
import styles from "../styles/imageCard.module.css";
import Button from "./Button";

const ImageCard = ({ image, alt, heading, buttonTxt, link, srcLink }) => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.container}>
        <img src={image} className={styles.imgElement} alt={alt} />
        <h3 className={styles.h3Element}>{heading}</h3>
        <Button
          buttonText={buttonTxt}
          className={styles.btnComponent}
          links={link}
        ></Button>
      </div>
      <p>image source: {srcLink}</p>
    </div>
  );
};

export default ImageCard;
