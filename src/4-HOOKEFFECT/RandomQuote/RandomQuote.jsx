import { useEffect, useState } from 'react';

export default function RandomQuote() {
	const [quote, setQuote] = useState('');
	const [getQuote, setGetQuote] = useState(false);

	useEffect(() => {
		if (getQuote) {
			console.log(getQuote);
			fetch('https://api.quotable.io/random')
				.then((response) => response.json())
				.then((data) => setQuote(data));
		}
		return () => {
			setGetQuote(false);
		};
	}, [getQuote]);
	return (
		<>
			<div>
				<span style={{ fontSize: '2rem' }}>{quote.content}</span>
				<p>{quote.author}</p>
			</div>
			<button onClick={() => setGetQuote(true)}>Get Random Quote</button>
		</>
	);
}
