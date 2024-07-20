import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Books() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/');
		}, 1000);
	}, []);
	return (
		<>
			<h1>404 Not Found</h1>
		</>
	);
}
