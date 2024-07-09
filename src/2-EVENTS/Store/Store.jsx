import Products from './Products';
export default function Store() {
	const productList = [
		{ id: 0, name: 'Basketball', price: 100 },
		{ id: 1, name: 'Soccerball', price: 200 },
		{ id: 2, name: 'Volleyball', price: 50 },
	];
	return (
		<>
			<h1>Store</h1>

			<div>
				<Products products={productList} />
			</div>
		</>
	);
}
