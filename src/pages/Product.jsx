import React from "react";
import styles from "./Product.module.css"
import Navbar from "../components/Navbar";

const Product = () => {
  return (
    <main className={styles.product}>
        <Navbar/>
      <section>
        <img src="bg.jpg" alt="bg" />
        <div>
          <h2>About World</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            sequi natus perferendis, vitae accusantium, quos voluptatem ipsam
            consequatur autem dolor saepe officiis dicta placeat!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Product;
