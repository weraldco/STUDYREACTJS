import { useState } from 'react';
import Products from './Products';
export default function Store() {
	const allProducts = [
		{
			id: 0,
			name: 'Basketball',
			price: 100,
			quantity: 1,
			img: './img/basketball.png',
		},
		{
			id: 1,
			name: 'Soccerball',
			price: 200,
			quantity: 2,
			img: './img/soccerball.png',
		},
		{
			id: 2,
			name: 'Volleyball',
			price: 50,
			quantity: 3,
			img: './img/volleyball.png',
		},
	];
	const [productList, setProductList] = useState(allProducts);
	return (
		<>
			<h1>Store</h1>

			<div>
				<Products products={productList} />
			</div>
		</>
	);
}
