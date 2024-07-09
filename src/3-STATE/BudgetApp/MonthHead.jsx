import PropTypes from 'prop-types';
import { formatNum } from './functionTest';
export default function MonthHead({ data }) {
	return (
		<>
			<div className="month">
				<span className="head-month">{data.month}</span>
				<div className="spend">
					<span>Total spend</span>
					<span className="spend-amount">
						{formatNum(
							data.expenses.reduce((total, c) => {
								return total + c.price;
							}, 0)
						)}
					</span>
				</div>
			</div>
		</>
	);
}

MonthHead.propTypes = {
	data: PropTypes.object,
};
