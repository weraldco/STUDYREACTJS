export default function Quantity() {
	let quantityCount = 0;

	function handleAdd() {
		quantityCount += 1;
		console.log('Quantity', quantityCount);
	}
	function handleSubtract() {
		quantityCount -= 1;
		console.log('Quantity', quantityCount);
	}
	return (
		<>
			<div>
				Quantity: <button onClick={handleAdd}>+</button>
				{quantityCount}
				<button onClick={handleSubtract}>-</button>
			</div>
		</>
	);
}
