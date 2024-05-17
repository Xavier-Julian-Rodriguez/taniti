"use client";
import styles from "../styles/imageCard.module.css";
import Button from "./Button";

const ImageCard = ({ image, alt, heading, buttonTxt }) => {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.imgElement} alt={alt} />
      <h3 className={styles.h3Element}>{heading}</h3>
      <Button buttonText={buttonTxt} className={styles.btnComponent}></Button>
    </div>
  );
};

export default ImageCard;
