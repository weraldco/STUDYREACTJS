import PropTypes from 'prop-types';
import { dateToday } from './functionTest';
import MonthHead from './MonthHead';
import OtherExpenses from './OtherExpenses';
export default function Expenses({ userExpenses }) {
	console.log(userExpenses);
	const test = userExpenses.filter((i) => i.month === dateToday);
	console.log(test);
	return (
		<>
			{/* expense start */}
			{test.map((data) => (
				<div key={data.id} className="expenses">
					<div className="other-expenses">
						<MonthHead data={data} />
						{/* {console.log(data)} */}
						<OtherExpenses expenses={test} />
					</div>
				</div>
			))}
			{/* expense end */}{' '}
		</>
	);
}

Expenses.propTypes = {
	userExpenses: PropTypes.array,
};
