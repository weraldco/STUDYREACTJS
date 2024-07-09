import { useEffect, useState } from 'react';
export default function Counter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		//The code thatt you want to run
		const intervalId = setInterval(() => {
			console.log(count);
			setCount((c) => c + 1);
		}, 1000);

		//Optional reutrn function, clear
		return () => {
			clearInterval(intervalId);
		};
	}, [count]); //The dependency array
	return (
		<>
			<div>
				<span style={{ fontSize: '2rem' }}>Count: {count}</span>
			</div>
		</>
	);
}
