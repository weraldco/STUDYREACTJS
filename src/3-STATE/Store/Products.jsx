import PropTypes from 'prop-types';
import { useState } from 'react';
import Quantity from './Quantity';
import basketball from './img/basketball.png';

export default function Products({ products }) {
	const [cart, setCart] = useState([]);
	const total = cart.reduce((total, product) => {
		return total + product.totalPrice;
	}, 0);
	console.log(cart);
	console.log(total);
	function getData(data) {
		const copyProducts = [...cart];
		const currentProduct = copyProducts.find((a) => a.name === data.name);
		if (currentProduct) {
			currentProduct.quantity += data.count;
			currentProduct.totalPrice = data.price * currentProduct.quantity;
			setCart(copyProducts);
		} else {
			setCart([
				...cart,
				{
					id: cart.length,
					name: data.name,
					price: data.price,
					quantity: data.count,
					totalPrice: data.price * data.count,
				},
			]);
		}
	}

	return (
		<>
			<ul
				style={{
					display: 'grid',
					gridTemplateColumns: 'auto auto auto',
					gap: '2rem',
					listStyle: 'none',
				}}
			>
				{products.map((product) => (
					<li key={product.id}>
						<Product prod={product} />
						<Quantity
							onClick={getData}
							name={product.name}
							price={product.price}
						/>
					</li>
				))}
			</ul>

			<div>
				<h2>My Cart</h2>
				<div
					style={{
						border: '1px solid yellow',
						padding: '0.25rem',
						borderRadius: '0.2rem',
					}}
				>
					{cart.map((product) => (
						<div key={product.id}>
							{product.quantity} x {product.name} : $
							{product.price * product.quantity}.00
						</div>
					))}
				</div>

				<div
					style={{
						border: '1px solid green',
						padding: '0.25rem',
						borderRadius: '0.2rem',
					}}
				>
					Total Amount: ${total}.00
				</div>
			</div>
		</>
	);
}

function Product({ prod }) {
	return (
		<>
			<div>
				<img src={basketball} />
				{prod.name} : {prod.price}
			</div>
		</>
	);
}

function Addtocart({ handleClick }) {
	return (
		<>
			<div>
				<button onClick={handleClick}>Add to cart</button>
			</div>
		</>
	);
}

// PROPTYPES
Products.propTypes = {
	products: PropTypes.array,
};
Product.propTypes = {
	prod: PropTypes.shape({ name: PropTypes.string, price: PropTypes.number }),
};
Addtocart.propTypes = { handleClick: PropTypes.func };
