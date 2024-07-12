import { useEffect, useState } from 'react';

export default function Lists({ getItem }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItem());
		console.log('Updating Items');
	}, [getItem]);
	return items.map((item) => (
		<div key={item} style={{ fontSize: '2rem' }}>
			{item}
		</div>
	));
}
