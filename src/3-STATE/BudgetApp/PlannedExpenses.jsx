import { useState } from 'react';
import AddExpense from './AddExpense';
import { data } from './data';
import { dateNow, dateToday, formatNum } from './functionTest';

export default function PlannedExpenses({ expenses }) {
	const [isAdding, setIsAdding] = useState(false);
	const [spendData, setSpendData] = useState(data);

	function handleAddClick(name, amount) {
		const copyData = [...spendData];
		const first = copyData.map((d) =>
			d.expense.map((i) => i).find((i) => i.month == dateToday)
		);

		first[0].plannedExpenses = [
			...first[0].plannedExpenses,
			{
				id: first[0].plannedExpenses.length,
				name: name,
				price: amount,
				date: dateNow,
			},
		];
		setSpendData(copyData);
		setIsAdding(false);
	}
	const totalPlannedExpenses = expenses.map((expense) =>
		expense.plannedExpenses.reduce(
			(total, curr) => total + Number(curr.price),
			0
		)
	);
	console.log(totalPlannedExpenses);
	return (
		<>
			<div className="main-planned">
				<div className="total-planned">
					<span>
						Planned <b>Expenses</b>
					</span>
					<p>{formatNum(totalPlannedExpenses)}</p>
				</div>
				<div className="planned">
					<div
						onClick={() => setIsAdding(true)}
						className="planned-item add-new-planned"
					>
						+
					</div>
					<div className="planned-expense">
						{expenses.map((expense) =>
							expense.plannedExpenses.map((e) => (
								<div key={e.id} className="planned-item">
									<span className="planned-title">{e.name}</span>
									<span className="planned-amount">{formatNum(e.price)}</span>
									<span className="percentage">
										{((e.price / totalPlannedExpenses) * 100).toFixed(2)}%
									</span>
								</div>
							))
						)}
					</div>
				</div>
				<AddExpense
					open={isAdding}
					close={() => setIsAdding(false)}
					handleClick={handleAddClick}
				/>
			</div>
		</>
	);
}
