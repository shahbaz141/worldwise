import React from 'react'
import styles from "./Appnav.module.css"
import { NavLink } from 'react-router-dom'
const Appnav = () => {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to="cities">Cities</NavLink>
            </li>
            <li>
                <NavLink to="Countries">Countries</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Appnav