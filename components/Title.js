// import Navbar from './Navbar.js'
import styles from "./Title.module.scss"

function Title(props) {
	return (
		<div class={styles.container}>
			<img class={styles.title} src="/static/images/title_image.png" />
			<img class={styles.ERC_logo} src="/static/images/ERC_white.png" />
		</div>

	);
}

export default Title