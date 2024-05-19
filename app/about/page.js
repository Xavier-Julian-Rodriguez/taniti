"use client";
import styles from "./about.module.css";
import CallToAction from "../../components/CallToAction";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="/hero.webp" alt="alt" className={styles.img} />
        <h1 className={styles.h1Element}>About Taniti</h1>
      </div>
      <p className={styles.source} style={{textAlign:"center"}}>
            image source: Ko, J. (May 17, 2022). Unsplash.{" "}
            <Link href="https://unsplash.com/photos/a-lagoon-with-a-boat-in-it-surrounded-by-palm-trees-TOvYrc0D9y4 ">
              LINK
            </Link>{" "}
          </p>
      <div className={styles.columnFlex}>
        <h2 className={styles.h2}>Taniti is a charming paradise island</h2>
        <p className={styles.text}>
          {" "}
          Taniti is a charming, paradise island in the Pacific spanning just 500
          square miles. The terrain is diverse featuring lush rainforests, a
          small harbor, a mountainous interior with an active volcano, and both
          sandy and rocky beaches. In the past, Taniti`s economy solely relied
          on fishing and agriculture. Recent tourism growth has been responsible
          for transforming the scenic island. Taniti is currenly home to around
          20,000 indigenous residents.
        </p>
      </div>
      <CallToAction
        img="/volcano.webp"
        alt="man wearing a rain jacket observing a volcano"
        heading="Explore an adventure of the senses in Taniti"
        btnText="Discover"
        link="/things-to-do"
        sourceLink={
          <>
            `Cahyono, N. (August 04, 2017). Unsplash.{" "}
            <Link href="https://unsplash.com/photos/person-wearing-yellow-jacket-standing-on-cliff-vmQ30d-NRRI">
              LINK
            </Link>
            `
          </>
        }
      />
    </>
  );
};

export default About;
