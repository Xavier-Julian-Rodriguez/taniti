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
        <h1 className={styles.h1Element}>Things To Do</h1>
      </div>
      <h2 className={styles.h2}>Dining</h2>
      <div className={styles.rowFlex}>
        <Card
          image="/panAsian.webp"
          text="Taniti currently has two Pan-Asian restaurants on the island. Zen Haven, and Fusion Bistro."
          alt="a pan asian meal"
        />
        <Card
          image="/seafoodChef.webp"
          text="Seafood is still very prominent on the island. There are currently five restaurants serving world-class seafood. These are: Neptune's Delight, Blue Wave Grill, Harbor Bounty, Sea Breeze Harvest, and Ocean's Grill."
          alt="a chef pouring seafood from pot to plate"
        />
        <Card
          image="/steak.webp"
          text="If you're craving an American meal, then visit any of the three American restaurants. Liberty Shack, Heartland Grill, and Pioneer Diner."
          alt="a steak meal with asparagus"
        />
      </div>
      <h2 className={styles.h2}>Activities, Lodging, and Shopping</h2>

      <div className={`${styles.rowFlex} ${styles.green}`}>
        <Card
          image="/snorkel.webp"
          text="Visit any of the many beaches on Taniti. If you're feeling adventurous, take a hike along the mountain and tread the path where lava once flowed along the active volcano! Go zip-lining in the rainforest, snorkeling, or take a helicopter ride. If you prefer a slower pace, go nine-hole golfing, drink at one of several pubs, watch a movie, or go fishing. We also have a museum for art and history lovers, an arcade, and dance clubs."
          alt="a man and woman snorkeling and filming a shark"
        />
        <Card image="/hotel.webp" text="text" alt="a four star island hotel" />
        <Card
          image="/convenienceStore.webp"
          text="text"
          alt="dairy beverages sittong on shelves"
        />
      </div>
      <h2 className={styles.h2}>Transportation</h2>

      <div className={styles.rowFlex}>
        <Card image="/plane.webp" text="text" alt="" />
        <Card image="/cruiseship.webp" text="text" alt="" />
        <Card image="/uber.webp" text="text" alt="" />
      </div>
      <CallToAction
        img="/sightseeing.webp"
        alt="woman taking a photo of a waterfall"
        heading="Frequently Requested Information"
        btnText="Read"
        link="/faq"
      />
    </>
  );
};

export default Things;
