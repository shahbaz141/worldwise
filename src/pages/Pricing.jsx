import React from "react";
import Navbar from "../components/Navbar";
import styles from "./Pricing.module.css"

const Pricing = () => {
  return (
    <main className={styles.product}>
      <Navbar />
      <section>
        <div>
          <h2>
            Simple pricing
            <br />
            Just $9/month
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            totam.
          </p>
        </div>
        <img src="bg.jpg" alt="bg" />
      </section>
    </main>
  );
};

export default Pricing;
