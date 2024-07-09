import { useState } from 'react';
export default function AddExpense({ open, close, handleClick }) {
	const [spendName, setSpendName] = useState('');
	const [spendAmount, setSpendAmount] = useState(0);

	if (!open) return null;
	return (
		<>
			<div>
				<input
					type="text"
					value={spendName}
					onChange={(e) => setSpendName(e.target.value)}
					placeholder="Name of expending.."
				/>{' '}
				$
				<input
					type="number"
					value={spendAmount}
					onChange={(e) => setSpendAmount(e.target.value)}
					placeholder="amount.."
				/>
				<br />
				<button
					onClick={() => {
						handleClick(spendName, spendAmount);
						setSpendName('');
						setSpendAmount(0);
					}}
				>
					add
				</button>
				<button onClick={close}>close</button>
			</div>
		</>
	);
}
