import PropTypes from 'prop-types';
import { formatDate, formatNum } from './functionTest';
export default function OtherExpenses({ expenses }) {
	return (
		<>
			{expenses.map((expense) => (
				<div key={expense.id} className="expenses">
					<div className="other-expenses">
						<ul>
							{expense.expenses
								.sort((a, b) => b.id - a.id)
								.map((d) => (
									<li key={d.id}>
										<div className="expense-title">
											<span className="title">{d.name}</span>
											<span></span>
											<span className="date">
												{formatDate(d.date, 'time')}
												{', '}
												{formatDate(d.date, 'date')}
											</span>
										</div>
										<div className="price">{formatNum(d.price)}</div>
									</li>
								))}
						</ul>
					</div>
				</div>
			))}
		</>
	);
}

OtherExpenses.propTypes = {
	expenses: PropTypes.array,
};
