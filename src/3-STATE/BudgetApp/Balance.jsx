import PropTypes from 'prop-types';
import { formatNum } from './functionTest';
export default function Balance({ userBalance }) {
	return (
		<>
			<div className="balance">
				<span>My Balance</span>
				<span className="balance-amount">{formatNum(userBalance)}</span>
			</div>
		</>
	);
}

Balance.propTypes = {
	userBalance: PropTypes.number,
};
