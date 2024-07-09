import { useState } from 'react';
import Balance from './Balance.jsx';
import { data } from './data.js';
import Expenses from './Expenses.jsx';
export default function ExpenseHistory() {
	const [userData, setUserData] = useState(data);

	return (
		<>
			<div>
				{/* start userData */}
				{userData.map((user) => (
					<div key={user.id} className="main">
						<Balance userBalance={user.balance} />
						<Expenses userExpenses={user.expense} />
					</div>
				))}

				{/* end of useData*/}
			</div>
		</>
	);
}
