import React, { useState } from "react";
import styles from "./Login.module.css"
import Navbar from "../components/Navbar";
const Login = () => {
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("123456");
  const handle=()=>{
    e.preventDefault();
  }
  return (
    <main className={styles.login}>
        <Navbar/>
    <form onSubmit={handle} className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="password">Passowrd</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.btnlogin}>Submit</button>
    </form>
    </main>
  );
};

export default Login;
