"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Card from "../components/Card";
import ImageCard from "../components/ImageCard";
import CallToAction from "../components/CallToAction";
import Date from "../components/date";
import Button from "../components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroBookContainer}>
          <h1 className={styles.h1}>Book Your Next Trip</h1>
          <h2 className={styles.heroH2}>
            Come Stay At The Scenic & Vibrant Taniti
          </h2>
          <p className={styles.heroText}>
            Select your departure date and your return date to view available
            flights, hotels, and car rentals.
          </p>
          <Date />
          <Button links="/" buttonText="Search" />
        </div>
        <div className={styles.heroImageContainer}>
          <img
            className={styles.heroImage}
            src="/hero.webp"
            alt="french polynesian beach"
            priority
            style={{ objectFit: "cover" }}
          />
          <p className={styles.source}>
            image source: Ko, J. (May 17, 2022). Unsplash.{" "}
            <Link href="https://unsplash.com/photos/a-lagoon-with-a-boat-in-it-surrounded-by-palm-trees-TOvYrc0D9y4 ">
              LINK
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className={styles.rowFlex}>
        <Card
          heading={
            <>
              `image source: Bellanger, F. (January 28, 2024). Unsplash{" "}
              <Link href="https://unsplash.com/photos/a-lagoon-with-a-boat-in-it-surrounded-by-palm-trees-TOvYrc0D9y4">
                LINK
              </Link>
              `
            </>
          }
          image="/birdEyeView.webp"
          alt="birds eye view of taniti island"
          text="Taniti is a Pacific island that is 500-square miles. Explore the unspoiled island and immerse yourself in the rich culture."
        />
        <Card
          heading={
            <>
              `image source: Landers, N. (February 21, 2024). Unsplash{" "}
              <Link href="https://unsplash.com/photos/a-woman-holding-a-bunch-of-flowers-in-front-of-her-face-48epHzHEeW8">
                LINK
              </Link>
            </>
          }
          image="/tanitian.webp"
          alt="tanitian person holding a floral lei"
          text="Taniti currently has an indigenous population of 20,000 where the culture has been passed down for generations. Art, music, and dance are a part of everyday life in Taniti. "
        />
        <Card
          heading={
            <>
              `image source: Yokoyama, K. (February 18, 2022). Unsplash.{" "}
              <Link href="https://unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-beach-next-to-the-ocean-oAa-3ekbbOc">
                LINK
              </Link>
              `
            </>
          }
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
          link="/things-to-do"
        />
        <ImageCard
          image="/seafood.webp"
          alt="a plate of seafood with a glass of white wine"
          heading="Dining"
          buttonTxt="Learn More"
          link="/things-to-do#dining"
        />
        <ImageCard
          image="/rideshare.webp"
          alt="an arm viewing a rideshare phone application on mobile device"
          heading="Transportation"
          buttonTxt="Learn More"
          link="/things-to-do#transportation"
        />
      </div>
      <CallToAction
        img="/tanetian.webp"
        alt="taniti woman wearing a lei"
        heading="Rich Culture Passed Down Many Generations"
        btnText="Discover"
        link="/about"
        sourceLink={<>`Raponi, M. (May 02, 2015). Pixabay. <Link href="https://pixabay.com/photos/floral-head-dress-french-polynesia-750652/">LINK</Link>`</>}
      />
    </main>
  );
}
