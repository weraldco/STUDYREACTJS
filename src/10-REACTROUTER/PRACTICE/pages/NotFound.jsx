import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
	const navigateBack = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigateBack('/', { state: 'Error page not found' });
		}, 1000);
	}, []);
	return (
		<>
			<h1>Error 404: Page not found</h1>
		</>
	);
}
