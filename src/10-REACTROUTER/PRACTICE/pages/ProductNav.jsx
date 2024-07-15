import { Link, Outlet } from 'react-router-dom';
export default function ProductNav() {
	return (
		<>
			<Link to="/product/1">Product 1</Link>
			<br />
			<Link to="/product/2">Product 2</Link>
			<br />
			<Link to="/product/new">New Product</Link>
			<Outlet
				context={{
					msg: 'Hello World',
					name: 'Werald',
					productName: 'Basketball',
				}}
			/>
		</>
	);
}
