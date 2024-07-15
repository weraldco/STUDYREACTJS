import { useOutletContext } from 'react-router-dom';
export default function NewProducts() {
	const outletObject = useOutletContext();
	return (
		<>
			<h1>New Products</h1>
			<p>{outletObject.name}</p>
		</>
	);
}
