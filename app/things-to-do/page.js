"use client";

import styles from "./things.module.css";
import Card from "../../components/Card";
import CallToAction from "@/components/CallToAction";
import Link from "next/link";

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
          <p style={{ fontSize: "12px" }}>
            image source: Kalina, A. (April 24, 2021). Unsplash.{" "}
            <Link href="https://unsplash.com/photos/cooked-food-on-white-ceramic-plate-tQWvZi0Fh48">
              LINK
            </Link>
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.imgCard}
            src="/zipline.webp"
            alt="a person zip lining down a tree in the rainforest"
          />
          <p style={{ fontSize: "12px" }}>
            image source: Outward Bound Costa Rica (January 24, 2024). Unsplash.{" "}
            <Link href="https://unsplash.com/photos/a-man-riding-a-zip-line-through-a-lush-green-forest-egQLkwxLKDs">
              LINK
            </Link>
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.imgCard}
            src="/rideshare.webp"
            alt="an arm viewing a rideshare phone application on mobile device"
          />
          <p style={{ fontSize: "12px" }}>
            image source: Tingey Injury Law Firm (March 16, 2021). Unsplash.{" "}
            <Link href="https://unsplash.com/photos/person-holding-black-iphone-5-rv9NXAvl2gg">
              LINK
            </Link>
          </p>
        </div>
        <h1 className={styles.h1Element}>Things To Do</h1>
      </div>
      <h2 id="dining" className={styles.h2}>
        Dining
      </h2>
      <div className={styles.rowFlex}>
        <Card
          heading={
            <>
              image source: Page, D. (March 18, 2022). Pixabay.{" "}
              <Link href="https://pixabay.com/photos/dish-noodles-food-asian-cuisine-7076898/">
                LINK
              </Link>
            </>
          }
          image="/panAsian.webp"
          text="Taniti currently has two Pan-Asian restaurants on the island. Zen Haven, and Fusion Bistro."
          alt="a pan asian meal"
        />
        <Card
          heading={
            <>
              image source: Zoli2003 (April 04, 2016). Pixabay.{" "}
              <Link href="https://pixabay.com/photos/service-chef-seafood-food-cooking-1303306/">
                LINK
              </Link>
            </>
          }
          image="/seafoodChef.webp"
          text="Seafood is still very prominent on the island. There are currently five restaurants serving world-class seafood. These are: Neptune's Delight, Blue Wave Grill, Harbor Bounty, Sea Breeze Harvest, and Ocean's Grill."
          alt="a chef pouring seafood from pot to plate"
        />
        <Card
          heading={
            <>
              image source: Byrd, A. (May 05, 2020). Unsplash.{" "}
              <Link href="https://unsplash.com/photos/grilled-meat-on-brown-wooden-chopping-board-YlXvFvfybao">
                LINK
              </Link>
            </>
          }
          image="/steak.webp"
          text="If you're craving an American meal, then visit any of the three American restaurants. Liberty Shack, Heartland Grill, and Pioneer Diner."
          alt="a steak meal with asparagus"
        />
      </div>
      <h2 className={styles.h2}>Activities, Lodging, and Shopping</h2>

      <div className={`${styles.rowFlex} ${styles.green}`}>
        <Card
          heading={
            <>
              image source: Pierrot, F. (January 20, 2018). Unsplash.{" "}
              <Link href="https://unsplash.com/photos/two-divers-taking-photo-of-shark-4JzS4mlUpfE">
                LINK
              </Link>
            </>
          }
          image="/snorkel.webp"
          text="Visit any of the many beaches on Taniti. If you're feeling adventurous, take a hike along the mountain and tread the path where lava once flowed along the active volcano! Go zip-lining in the rainforest, snorkeling, or take a helicopter ride. If you prefer a slower pace, go nine-hole golfing, drink at one of several pubs, watch a movie, or go fishing. We also have a museum for art and history lovers, an arcade, and dance clubs."
          alt="a man and woman snorkeling and filming a shark"
        />
        <Card
          heading={
            <>
              image source: Kaunas, S. (March 13, 2020). Unsplash.{" "}
              <Link href="https://unsplash.com/photos/brown-wooden-beach-lounge-chairs-on-brown-wooden-dock-during-daytime-G6eXUCi8JgA">
                LINK
              </Link>
            </>
          }
          image="/hotel.webp"
          text="Hospitality is our specialty. Make yourself at home at one of several inexpensive hostels to our four-star resort. If you prefer boutique style, many family-owned hotels will accomodate you and provide excellent service. For our early risers, reserve your stay at a bed and breakfast. No matter where you choose to call home, all types of lodging are continuously regulated and thoroughly inspected by the Tanitian government."
          alt="a four star island hotel"
        />
        <Card
          heading={
            <>
              image source: Eliason, K. (September 28, 2017). Unsplash.{" "}
              <Link href="https://unsplash.com/photos/assorted-drinks-on-white-commercial-refrigerator-SvhXD3kPSTY">
                LINK
              </Link>
            </>
          }
          image="/convenienceStore.webp"
          text="Need groceries? The island currently has two supermarkets, two smaller grocery stores, and a convenience store that is open 24-hours a day."
          alt="dairy beverages sittong on shelves"
        />
      </div>
      <h2 id="transportation" className={styles.h2}>
        Transportation
      </h2>

      <div className={styles.rowFlex}>
        <Card
          heading={
            <>
              image source: Cegoh (March 31, 2014). Pixabay.{" "}
              <Link href="https://pixabay.com/photos/plane-airline-sky-airport-fly-302045/">
                LINK
              </Link>
            </>
          }
          image="/plane.webp"
          text="Most travelers arrive at Taniti by small jets and propeller planes. We are currently expanding our airport to welcome larger jets and hope to receive larger air vessels within the next few years."
          alt=""
        />
        <Card
          heading={
            <>
              image source: Mielke, S. (August 09, 2016). Pixabay.{" "}
              <Link href="https://pixabay.com/photos/cruise-ship-ocean-cruise-ship-1578528/">
                LINK
              </Link>
            </>
          }
          image="/cruiseship.webp"
          text="Some guests arrive to the island via cruise ship then dock at Yellow Leaf Bay for one night per week. Visit your cruise reception desk and ask to see our docking schedule."
          alt=""
        />
        <Card
          heading={
            <>
              image source: Avdeev, V. (July 05, 2020). Unsplash.{" "}
              <Link href="https://unsplash.com/photos/white-mercedes-benz-c-class-on-street-during-daytime-Gk3apXDUZiI">
                LINK
              </Link>
            </>
          }
          image="/uber.webp"
          text="There are many ways to see our serene island. Among the various options, many local residents offer ride share through Uber and Lyft. We offer bus transportation running from 5am to 11pm. Taxis serve Taniti City, and cars can be rented near the airport at the local rental agency. If you prefer biking, bikes and helmets are available to rent. If you stay near Merriton Landing, walking on foot is easy to explore."
          alt=""
        />
      </div>
      <CallToAction
        img="/sightseeing.webp"
        alt="woman taking a photo of a waterfall"
        heading="Frequently Requested Information"
        btnText="Read"
        link="/faq"
        sourceLink={
          <>
            Macdonald, B. (December 26, 2020). Unsplash.{" "}
            <Link href="https://unsplash.com/photos/man-in-black-jacket-taking-photo-of-waterfalls-during-daytime-fJmt_spjCX4">
              LINK
            </Link>
          </>
        }
      />
    </>
  );
};

export default Things;
