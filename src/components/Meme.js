import { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
	const [meme, setMemeImage] = useState({
		topText: '',
		bottomText: '',
		randomImage: ''
	});

	const [allMemeImages] = useState(memesData);

	function getMemeImage() {
		const memes = allMemeImages.data.memes;
		const max = memes.length;
		const min = 0;
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		const memUrl = memes[randomNum].url;
		setMemeImage((prevMeme) => {
			return {
				...prevMeme,
				randomImage: memUrl
			};
		});
	}
	return (
		<main className="main-container">
			<section className="meme">
				<input className="meme__text" type="text" placeholder="first" />
				<input className="meme__text" type="text" placeholder="second" />
				<button onClick={getMemeImage} className="meme__btn">
					Get a new meme image 🖼
				</button>
				<img className="meme-photo" src={meme.randomImage} alt="" />
			</section>
		</main>
	);
}
