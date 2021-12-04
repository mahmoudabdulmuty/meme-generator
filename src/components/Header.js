import trollFace from '../images/troll-face.png';
export default function Header() {
	return (
		<header className="header">
			<img className="troll-face" src={trollFace} alt="" />
			<h1 className="header__title">Meme Generator</h1>
			<p className="header__description">React Course - Project 3</p>
		</header>
	);
}
