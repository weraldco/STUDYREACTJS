import { useMemo, useState } from 'react';
export default function Demo() {
	const [number, setNumber] = useState(0);
	const [themeChange, setThemeChange] = useState(false);
	const doubleNumber = useMemo(() => {
		return slowFunction(number);
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
	function slowFunction(num) {
		console.log('Calling slow function');
		for (let i = 0; i <= 1000000000; i++) {}
		return num * 2;
	}
	return (
		<>
			<div style={theme}>
				<input
					style={{ fontSize: '2rem' }}
					value={number}
					onChange={(e) => {
						if (e.target.value >= 0) {
							return setNumber(e.target.value);
						}
					}}
					type="number"
					name=""
					id=""
				/>
				<button onClick={handleThemeChange}>
					Change {themeChange ? 'to Light' : 'to Dark'} Theme
				</button>
				<div>{doubleNumber}</div>
			</div>
		</>
	);
}
