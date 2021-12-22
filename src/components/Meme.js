import { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
	const [meme, setMeme] = useState({
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
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				randomImage: memUrl
			};
		});
	}
	const handleChange = (event) => {
		const { name, value } = event.target;
		setMeme((prevMeme) => {
			return {
				...prevMeme,
				[name]: value
			};
		});
	};
	return (
		<main className="main-container">
			<section className="meme">
				<input
					name="topText"
					value={meme.topText}
					className="meme__text"
					type="text"
					placeholder="Top Text"
					onChange={handleChange}
				/>
				<input
					name="bottomText"
					value={meme.bottomText}
					className="meme__text"
					type="text"
					placeholder="Bottom Text"
					onChange={handleChange}
				/>
				<button onClick={getMemeImage} className="meme__btn">
					Get a new meme image 🖼
				</button>
				<div className="meme">
					<img className="meme-photo" src={meme.randomImage} alt="" />
					<h2 className="meme--text top">{meme.topText}</h2>
					<h2 className="meme--text bottom">{meme.bottomText}</h2>
				</div>
			</section>
		</main>
	);
}
