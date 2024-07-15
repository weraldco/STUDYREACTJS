import { NameContext } from './Demo';
import LevelTwo from './LevelTwo';
export default function LevelOne() {
	return (
		<>
			{' '}
			<div style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
				<h2>Level One</h2>
				<LevelTwo />
			</div>
		</>
	);
}
