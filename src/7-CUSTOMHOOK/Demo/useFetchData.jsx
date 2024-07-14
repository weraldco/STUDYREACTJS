import { useEffect, useState } from 'react';
export default function useFetchData(url) {
	const [value, setValue] = useState([]);
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setValue(data));
	}, [url]);

	return value;
}
