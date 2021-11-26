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
      </ul>
    </nav>
    )
}

export default NavBar