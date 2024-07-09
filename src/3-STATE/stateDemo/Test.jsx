import { useEffect, useState } from 'react';

export default function Test() {
	const [count, setCount] = useState(1);

	function getData(data) {
		setCount(data.count);
		console.log(data.sample);
	}
	return (
		<>
			<Counter onClick={getData} />

			<div>{count}</div>
		</>
	);
}

function Counter(props) {
	const [count, setCount] = useState(1);
	const sample = 'name';
	function handleOnIncrement() {
		setCount((c) => c + 1);
	}
	function handleOnDecrement() {
		setCount((c) => c - 1);
	}
	function handleClick() {
		props.onClick({ count, sample });
	}
	return (
		<>
			<button onClick={handleOnIncrement}>+</button>
			<span>{count}</span>
			<button onClick={handleOnDecrement}>-</button>

			<div>
				<button onClick={handleClick}>Add to cart</button>
			</div>
		</>
	);
}

// import { PropTypes } from 'prop-types';
// import { useState } from 'react';
// export default function Demo() {
// 	// const [count, setCount] = useState(0);

// 	// const handleIncrement = () => {
// 	// 	setCount((c) => (c !== 10 ? c + 1 : c));
// 	// };
// 	// const handleDecrement = () => {
// 	// 	setCount((c) => (c !== 0 ? c - 1 : c));
// 	// };

// 	const hobbies = [
// 		{ index: 0, name: 'Basketball', id: 'basketball', isCheck: false },
// 		{ index: 1, name: 'Video games', id: 'videogame', isCheck: true },
// 		{ index: 2, name: 'Cooking food', id: 'cookingfood', isCheck: true },
// 	];
// 	const [fullname, setFullname] = useState('');
// 	const [age, setAge] = useState(0);
// 	const [status, setStatus] = useState('Single');
// 	const [hobbiesList, setHobbiesList] = useState(hobbies);

// 	function handleSubmit() {
// 		const filtHobby = hobbiesList
// 			.filter((hobby) => hobby.isCheck)
// 			.reduce(
// 				(myHobby, hobby) =>
// 					myHobby +
// 					(hobby.index === hobbiesList.length - 1
// 						? `and ${hobby.name}.`
// 						: `${hobby.name}, `),
// 				[]
// 			);

// 		console.log(
// 			`Hello ${fullname}, age of ${age} years old, status of ${status}, my hobbies are ${filtHobby}`
// 		);
// 	}

// 	function handleCheck(id) {
// 		const myHobby = hobbiesList.map((hobby) => {
// 			if (id === hobby.index) {
// 				return { ...hobby, isCheck: hobby.isCheck ? false : true };
// 			} else {
// 				return hobby;
// 			}
// 		});
// 		setHobbiesList(myHobby);
// 	}
// 	return (
// 		<>
// 			{/* <div>
// 				<button onClick={handleIncrement}>+</button>
// 				<span style={{ fontSize: '2rem', padding: '1rem' }}>{count}</span>
// 				<button onClick={handleDecrement}>-</button>
// 			</div> */}

// 			<div>
// 				<label htmlFor="">Fullname: </label>
// 				<input
// 					type="text"
// 					value={fullname}
// 					onChange={(e) => {
// 						setFullname(e.target.value);
// 					}}
// 				/>
// 				<br />
// 				<label htmlFor="">Age: </label>
// 				<input
// 					type="number"
// 					value={age}
// 					onChange={(e) => setAge(e.target.value)}
// 				/>
// 				<br />
// 				Hobby
// 				<br />
// 				{hobbiesList.map((hobby) => (
// 					<Checkbox
// 						key={hobby.index}
// 						list={hobby}
// 						handleCheckChange={handleCheck}
// 					>
// 						{hobby.name}
// 					</Checkbox>
// 				))}
// 				<select
// 					name=""
// 					value={status}
// 					onChange={(e) => setStatus(e.target.value)}
// 				>
// 					<option value="Single">Single</option>
// 					<option value="Married">Married</option>
// 					<option value="Widow">Widow</option>
// 				</select>
// 				<br />
// 				<button onClick={handleSubmit}>Submit</button>
// 			</div>
// 		</>
// 	);
// }

// function Checkbox({ children, list, handleCheckChange }) {
// 	return (
// 		<>
// 			<div>
// 				<input
// 					type="checkbox"
// 					id={list.id}
// 					value={children}
// 					checked={list.isCheck}
// 					onChange={() => handleCheckChange(list.index)}
// 				/>
// 				<label htmlFor={list.id}>{children}</label>
// 			</div>
// 		</>
// 	);
// }

// Checkbox.propTypes = {
// 	children: PropTypes.string,
// 	list: PropTypes.object,
// 	handleCheckChange: PropTypes.func,
// };
