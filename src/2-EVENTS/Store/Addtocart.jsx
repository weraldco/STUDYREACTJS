export default function Addtocart() {
	const cart = [];
	function handleClick() {
		console.log('Product added to cart');
	}
	return (
		<>
			<div>
				<button onClick={handleClick}>Add to cart</button>
			</div>
		</>
	);
}
