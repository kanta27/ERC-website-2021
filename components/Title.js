// import Navbar from './Navbar.js'

function Title(props) {
	return (
		<>
			<div class="title">
				<img class="ERC_logo" src="/static/images/ERC_white.png" alt="Electronics and Robotics Club"/>
			</div>
			<style jsx>{`
		        .title {
		        	height: 100%;
		        	width: 100%;
					background-image: url("/static/images/title_image.png");
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					background-color: #000;
				}

				.ERC_logo {
					width: 50%;
					margin: 30% 0% 2% 45%;
				}
		     `}</style>
		</>

	);
}

export default Title