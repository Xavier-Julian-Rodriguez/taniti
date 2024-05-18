"use client";

import styles from "./things.module.css";
import Card from "../../components/Card";
import CallToAction from "@/components/CallToAction";

const Things = () => {
  return (
    <>
      <div className={`${styles.rowFlex} ${styles.blue}`}>
        <div className={styles.imgContainer}>
          <img
            className={styles.imgCard}
            src="/seafood.webp"
            alt="a plate of seafood with a glass of white wine"
          />
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.imgCard}
            src="/zipline.webp"
            alt="a person zip lining down a tree in the rainforest"
          />
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.imgCard}
            src="/rideshare.webp"
            alt="an arm viewing a rideshare phone application on mobile device"
          />
        </div>
      </div>
      <h1 className={styles.h1Element}>Things To Do</h1>
      <h2 className={styles.h2}>Dining</h2>
      <div className={styles.rowFlex}>
        <Card image="/hero.webp" text="text" alt="" />
        <Card image="/hero.webp" text="text" alt="" />
        <Card image="/hero.webp" text="text" alt="" />
      </div>
      <h2 className={styles.h2}>Activities</h2>

      <div className={`${styles.rowFlex} ${styles.green}`}>
        <Card image="/hero.webp" text="text" alt="" />
        <Card image="/hero.webp" text="text" alt="" />
        <Card image="/hero.webp" text="text" alt="" />
      </div>
      <h2 className={styles.h2}>Transportation</h2>

      <div className={styles.rowFlex}>
        <Card image="/hero.webp" text="text" alt="" />
        <Card image="/hero.webp" text="text" alt="" />
        <Card image="/hero.webp" text="text" alt="" />
      </div>
      <CallToAction
        img="/sightseeing.webp"
        alt="woman taking a photo of a waterfall"
        heading="Frequently Requested Information"
        btnText="Read"
      />
    </>
  );
};

export default Things;
