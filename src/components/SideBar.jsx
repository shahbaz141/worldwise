import React from 'react'
import styles from "./SideBar.module.css"
import Logo from './Logo'
import Appnav from './Appnav'
import { Outlet } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <Appnav/>
        <Outlet/>
        <footer className={styles.footer}>
            <p>&copy;copyright{new Date().getFullYear}</p>
        </footer>

    </div>
  )
}

export default SideBar