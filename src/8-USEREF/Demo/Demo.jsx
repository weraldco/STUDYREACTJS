import { useMemo, useRef, useState } from 'react';
export default function Demo() {
	const [name, setName] = useState('');
	const myName = useRef();
	useMemo(() => {
		console.log(myName.current);
	}, [myName]);
	return (
		<>
			<input
				type="text"
				ref={myName}
				value={name}
				placeholder="Enter your name.."
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => myName.current.focus()}>Submit</button>

			<p>Hello {name}</p>
		</>
	);
}
