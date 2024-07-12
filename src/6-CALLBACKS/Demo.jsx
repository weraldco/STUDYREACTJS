import { useCallback, useState } from 'react';
import Lists from './Lists';
export default function Demo() {
	const [number, setNumber] = useState(1);
	const [themeChange, setThemeChange] = useState(false);

	const getItem = useCallback(() => {
		return [number, number + 1, number + 2];
	}, [number]);
	const theme = {
		backgroundColor: themeChange ? 'black' : 'white',
		color: themeChange ? 'white' : 'black',
		padding: '3em',
		width: '100%',
		borderRadius: '3em',
	};
	function handleThemeChange() {
		setThemeChange((theme) => !theme);
	}

	return (
		<>
			<div style={theme}>
				<input
					style={{ fontSize: '2rem' }}
					value={number}
					onChange={(e) => {
						if (e.target.value >= 0) {
							return setNumber(parseInt(e.target.value));
						}
					}}
					type="number"
					name=""
					id=""
				/>
				<button onClick={handleThemeChange}>
					Change {themeChange ? 'to Light' : 'to Dark'} Theme
				</button>
				<Lists getItem={getItem} />
			</div>
		</>
	);
}
