import styles from "./NavBar.module.scss"
import Link from 'next/link'

const NavBar=()=>{
    return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.button}><Link href="/"><a>Home</a></Link></li>
        <li className={styles.button}><Link href="/"><a>Events</a></Link></li>
        <li className={styles.button}><Link href="/"><a>Team Details</a></Link></li>
        <li className={styles.button}><Link href="/"><a>Contact Us</a></Link></li>
        {/* <a className={styles.button} href="#Home"> Home</a>
        <a className={styles.button} href="#events"> Events</a>
        <a className={styles.button} href="#team-details"> Team Details</a>
        <a className={styles.button} href="#contact-us"> Contact Us</a> */}
      </ul>
    </nav>
    )
}

export default NavBar