import Image from "next/image";
import styles from "./page.module.css";
import Card from "../components/Card";
import ImageCard from "../components/ImageCard";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBookContainer}>
          <p>book form goes here</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            className={styles.heroImage}
            src="/hero.webp"
            alt="french polynesian beach"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className={styles.rowFlex}>
        <Card
          image="/birdEyeView.webp"
          alt="birds eye view of taniti island"
          text="Taniti is a Pacific island that is 500-square miles. Explore the unspoiled island and immerse yourself in the rich culture."
        />
        <Card
          image="/tanitian.webp"
          alt="tanitian person holding a floral lei"
          text="Taniti currently has an indigenous population of 20,000 where the culture has been passed down for generations. Art, music, and dance are a part of everyday life in Taniti. "
        />
        <Card
          image="/fishing.webp"
          alt="people fishing on the beach during sunset"
          text="Taniti, once a serene island where agriculture and fishing sustained its population has transformed into a must-see tourist haven. Many visitors from around the world come to experience Taniti's pristine beaches for fishing, snorkeling, and peaceful strolls along the shore."
        />
      </div>
      <div className={styles.rowFlex}>
        <ImageCard
          image="/zipline.webp"
          alt="a person zip lining down a tree in the rainforest"
          heading="Things To Do"
          buttonTxt="Learn More"
        />
        <ImageCard
          image="/seafood.webp"
          alt="a plate of seafood with a glass of white wine"
          heading="Dining"
          buttonTxt="Learn More"
        />
        <ImageCard
          image="/rideshare.webp"
          alt="an arm viewing a rideshare phone application on mobile device"
          heading="Transportation"
          buttonTxt="Learn More"
        />
      </div>
      <CallToAction
        img="/tanetian.webp"
        alt="taniti woman wearing a lei"
        heading="Rich Culture Passed Down Many Generations"
        btnText="Discover"
      />
    </main>
  );
}
