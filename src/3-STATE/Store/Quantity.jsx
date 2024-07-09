import PropTypes from 'prop-types';
import { useState } from 'react';
export default function Quantity(props) {
	const [count, setCount] = useState(1);
	function handleAdd() {
		setCount((c) => c + 1);
	}
	function handleSubtract() {
		setCount((c) => c - 1);
	}
	function handleOnClick(name, price) {
		props.onClick({ count, name, price });
		setCount(1);
	}

	return (
		<>
			<div>
				Quantity: <button onClick={handleAdd}>+</button>
				{count}
				<button onClick={handleSubtract}>-</button>
			</div>
			<Addtocart handleClick={() => handleOnClick(props.name, props.price)} />
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
Addtocart.propTypes = { handleClick: PropTypes.func };

Quantity.propTypes = {
	quantityCount: PropTypes.number,
	handleAdd: PropTypes.func,
	handleSubtract: PropTypes.func,
};
