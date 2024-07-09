import PropTypes from 'prop-types';
import Addtocart from './Addtocart';
import Quantity from './Quantity';

export default function Products({ products }) {
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
						<Quantity />
						<Addtocart />
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
