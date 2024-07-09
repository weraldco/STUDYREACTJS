import PropTypes from 'prop-types';

export default function Products({ products }) {
	return (
		<>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<Product prod={product} />
					</li>
				))}
			</ul>
		</>
	);
}

function Product({ prod }) {
	return (
		<>
			<div>
				{prod.name} : {prod.price}
			</div>
		</>
	);
}

Products.propTypes = {
	products: PropTypes.array,
};

Product.propTypes = {
	prod: PropTypes.shape({ name: PropTypes.string, price: PropTypes.number }),
};
