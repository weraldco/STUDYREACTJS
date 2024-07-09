import { useEffect, useState } from 'react';
export default function Demo() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		//The code thatt you want to run
		console.log('The count is', count);

		//Optional reutrn function, clear
		return () => {
			console.log('Cleaning up count');
		};
	}, [count]); //The dependency array
	return (
		<>
			<div>
				<span style={{ fontSize: '2rem' }}>Count: {count}</span>
			</div>

			<button
				onClick={() => {
					setCount((c) => c + 1);
				}}
			>
				+
			</button>

			<button
				onClick={() => {
					setCount((c) => c - 1);
				}}
			>
				-
			</button>
		</>
	);
}
