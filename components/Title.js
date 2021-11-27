// import Navbar from './Navbar.js'
import styles from "./Title.module.scss"

function Title(props) {
	return (
		<div className={styles.container}>
			<img className={styles.title} src="/static/images/title_image.png" />
			<img className={styles.ERC_logo} src="/static/images/ERC_white.png" />
		</div>

	);
}

export default Title