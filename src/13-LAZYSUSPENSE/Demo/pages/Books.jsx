import { useOutletContext, useParams } from 'react-router-dom';
export default function Books() {
	const { id } = useParams();
	const object = useOutletContext();
	return (
		<>
			<h1>
				Books {id} {object.msg}
			</h1>
		</>
	);
}
