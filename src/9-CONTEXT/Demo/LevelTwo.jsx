import { useContext } from 'react';
import { NameContext } from './Demo';
export default function LevelTwo() {
	const name = useContext(NameContext);
	return (
		<>
			<div style={{ backgroundColor: 'lightpink', padding: '1rem' }}>
				<h2>Level Two</h2>
				<p>Welcome to our page {name}</p>
			</div>
		</>
	);
}
