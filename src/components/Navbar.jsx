import React from 'react'
import styles from "./Navbar.module.css"
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Logo/>
        <ul>
            <li>
                <a href="/pricing">Pricing</a>
            </li>
            <li>
                <a href="/product">Product</a>
            </li>
            <li>
                <a href="/login" className={styles.ctaLink}>Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar