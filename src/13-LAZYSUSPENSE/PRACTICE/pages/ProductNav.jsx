import { Link, Outlet } from 'react-router-dom';
export default function ProductNav() {
	return (
		<>
			<div className="flex gap-3">
				<Link to="/product/1" className=" text-blue-500 hover:text-blue-300">
					Product 1
				</Link>
				<br />
				<Link to="/product/2" className=" text-blue-500 hover:text-blue-300">
					Product 2
				</Link>
				<br />
				<Link to="/product/new" className=" text-blue-500 hover:text-blue-300">
					New Product
				</Link>
			</div>
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
