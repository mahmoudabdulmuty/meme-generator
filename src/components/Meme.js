import { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
	const [memeImage, setMemeImage] = useState('');
	function getMemeImage() {
		const memes = memesData.data.memes;
		const max = memes.length;
		const min = 0;
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		setMemeImage(memes[randomNum].url);
	}

	return (
		<main className="main-container">
			<section className="meme">
				<input className="meme__text" type="text" placeholder="first" />
				<input className="meme__text" type="text" placeholder="second" />
				<button onClick={getMemeImage} className="meme__btn">
					Get a new meme image 🖼
				</button>
				<img className="meme-photo" src={memeImage} alt="" />
			</section>
		</main>
	);
}
