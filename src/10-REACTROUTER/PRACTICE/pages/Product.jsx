import { useOutletContext, useParams } from 'react-router-dom';
export default function Product() {
	const { id } = useParams();
	const outletObject = useOutletContext();
	return (
		<>
			<h1>Product {id}</h1>
			<p>{outletObject.msg}</p>
		</>
	);
}