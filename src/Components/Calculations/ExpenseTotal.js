import React from 'react';
import {totalAmount, numberFormat} from '../../Functions/Funtions';

function ExpenseTotal(props) {
	const data = props.account;
	// get expense total value
	const totalValue =  data.length ? totalAmount(data, "total_value"): 0;

	return (
		<div data-testid="expense_total">Expense: {numberFormat('en-AU', 'AUD', totalValue)}</div>
	)
}

export default ExpenseTotal