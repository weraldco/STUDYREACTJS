import { useEffect, useState } from 'react';
export default function APIEffect() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const [quote, setQuote] = useState([]);
	function handleResize() {
		setWindowWidth(window.innerWidth);
	}
	useEffect(() => {
		//The code thatt you want to run
		addEventListener('resize', handleResize);
		console.log('width resized');
		// fetch('https://api.quotable.io/random')
		// 	.then((response) => response.json())
		// 	.then((data) => setQuote(data));

		//Optional return function, clear
	}, []); //The dependency array
	return (
		<>
			<div>
				{/* <span style={{ fontSize: '2rem' }}>{quote.content}</span>
				<p>-{quote.author}</p> */}
				<p>{windowWidth}</p>
			</div>
		</>
	);
}
