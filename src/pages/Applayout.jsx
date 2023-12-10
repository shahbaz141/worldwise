import React from 'react'
import styles from "./Applayout.module.css"
import SideBar from '../components/SideBar'
import Map from '../components/Map'
const Applayout = () => {
  return (
    <div className={styles.app}>
        <SideBar/>
        <Map/>
    </div>
  )
}

export default Applayout