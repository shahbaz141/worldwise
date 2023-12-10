import React from "react";
import Navbar from "../components/Navbar";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className={styles.homepage}>
      <Navbar />
      <section>
        <h1>
          You travel the world
          <br />
          Worldwise keep track of your adevntures
        </h1>
        <h2>
          A worldmap that tracks your footsteps into every city you can think
          pf. Never forget your wonderful experiences,and show your friends how
          you have wandered the world
        </h2>
       <Link className="cta" to="/app">
        Start Tracking Now
       </Link>
      </section>
    </main>
  );
};

export default Home;
