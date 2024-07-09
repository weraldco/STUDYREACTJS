import { useState } from 'react';
import AddExpense from './AddExpense';
import { data } from './data';
import { dateNow, dateToday } from './functionTest';
import OtherExpenses from './OtherExpenses';
import PlannedExpenses from './PlannedExpenses';

export default function Budget() {
	const [isAdding, setIsAdding] = useState(false);
	const [spendData, setSpendData] = useState(data);

	function handleAddClick(name, amount) {
		const copyData = [...spendData];
		const first = copyData.map((d) =>
			d.expense.map((i) => i).find((i) => i.month == dateToday)
		);

		first[0].expenses = [
			...first[0].expenses,
			{
				id: first[0].expenses.length,
				name: name,
				price: amount,
				date: dateNow,
			},
		];
		setSpendData(copyData);
		setIsAdding(false);
	}

	return (
		<>
			<div className="budget-main">
				{spendData.map((user) => (
					<div key={user.id} className="main">
						<div className="user-header">
							<div className="user-img">
								<img src={user.img} className="user-pic" />
							</div>
							<div className="welcome-message">
								<span className="user-greet">Hi Werald,</span>
								<span className="user-title">
									Monthly <b>Budget</b>
								</span>
							</div>
							<div className="user-button">
								<button>My Balance</button>
							</div>
						</div>
						<PlannedExpenses
							expenses={user.expense.filter((i) => i.month == dateToday)}
						/>
						<span>
							Spending{' '}
							{user.expense
								.filter((i) => i.month == dateToday)
								.map((d) => d.month.split(' ')[0])}{' '}
							<button onClick={() => setIsAdding(true)}>add</button>
							<AddExpense
								open={isAdding}
								close={() => setIsAdding(false)}
								handleClick={handleAddClick}
							/>
						</span>
						<OtherExpenses
							expenses={user.expense.filter((i) => i.month == dateToday)}
						/>
						<OtherExpenses
							expenses={user.expense.filter((i) => i.month == dateToday)}
						/>
						<OtherExpenses
							expenses={user.expense.filter((i) => i.month == dateToday)}
						/>
					</div>
				))}
				<div className="test">
					<div className="wrapper">
						<button>H</button>
						<button onClick={() => setIsAdding(true)}>+</button>
						<button>X</button>
					</div>
				</div>
			</div>
		</>
	);
}
