"use client";

import styles from "./faq.module.css";
import CallToAction from "@/components/CallToAction";

const Faq = () => {
  return (
    <>
      <div className={`${styles.rowFlex} ${styles.blue}`}>
        <h1 className={styles.h1}>Frequently Requested Information</h1>
        <ul className={styles.list}>
          <li className={styles.li}>
            Power outlets are 120 volts (the same as in the United States).
          </li>
          <li className={styles.li}>
            Alcohol is not allowed to be served or sold between the hours of
            midnight and 9:00 a.m.
          </li>
          <li className={styles.li}>
            The drinking age on Taniti is 18 and the drinking age is not
            strictly enforced.
          </li>
          <li className={styles.li}>
            Many younger Tanitians speak fluent English. Very little English is
            spoken in rural areas, especially by the older residents.
          </li>
          <li className={styles.li}>
            There is one hospital and several clinics. The hospital has many
            multilingual employees.
          </li>
          <li className={styles.li}>
            Violent crime is very rare on Taniti, but as tourism increases,
            there are more reports of pickpocketing and other petty crimes.
          </li>
          <li className={styles.li}>
            Taniti enjoys a large number of national holidays, and many tourist
            attractions and restaurants will be closed on holidays, so visitors
            should plan accordingly.
          </li>
          <li className={styles.li}>
            Taniti uses the U.S. dollar as its currency, but many businesses
            will also accept euros and yen. Several banks facilitate currency
            exchange, and many businesses accept major credit cards.
          </li>
        </ul>
      </div>
      <CallToAction
        img="/concierge.webp"
        alt="man and woman employees standing behind hotel concierge desk"
        heading="Do You Require Customer Support?"
        btnText="Go"
        link="/contact"
      />
    </>
  );
};

export default Faq;
