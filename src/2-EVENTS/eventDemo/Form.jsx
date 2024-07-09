export default function Form() {
	function handleSubmit() {
		console.log('Submitted');
	}
	return (
		<>
			<label htmlFor="">Name: </label>
			<input
				type="text"
				onChange={(e) => console.log(e.target.value)}
				placeholder="Enter your name.."
			/>
			<button onClick={handleSubmit}>Submit</button>
		</>
	);
}
