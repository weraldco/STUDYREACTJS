import { useEffect } from 'react';

export default function useUpdateLogger(name) {
	return useEffect(() => {
		console.log(name);
	}, [name]);
}
