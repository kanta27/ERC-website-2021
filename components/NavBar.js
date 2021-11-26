import styles from "./NavBar.module.scss"
import Link from 'next/link'
import { useState } from "react"

const NavBar=()=>{
  const [sidebar, setSidebar]= useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.buttons_view}><Link href="/"><a>Home</a></Link></li>
          <li className={styles.buttons_view}><Link href="/"><a>Events</a></Link></li>
          <li className={styles.buttons_view}><Link href="/"><a>Team Details</a></Link></li>
          <li className={styles.buttons_view}><Link href="/"><a>Contact Us</a></Link></li>
        </ul>
      </nav> 
      <div className={styles.navbar_mobile}>
        <div className={styles.na}>
          <button href="/" className={styles.menu_bars} onClick={showSidebar}>☰</button>
        </div>
        <nav className={sidebar ? styles.nav_menu_active : styles.nav_menu}>
          <ul className={styles.nav_menu_items} onClick={showSidebar}>
            <li className={styles.buttons_view}><Link href="/"><a>Close &times;</a></Link></li>
            <li className={styles.buttons_view}><Link href="/"><a>Home</a></Link></li>
            <li className={styles.buttons_view}><Link href="/"><a>Events</a></Link></li>
            <li className={styles.buttons_view}><Link href="/"><a>Team Details</a></Link></li>
            <li className={styles.buttons_view}><Link href="/"><a>Contact Us</a></Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavBar