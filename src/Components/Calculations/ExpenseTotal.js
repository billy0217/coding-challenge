import React from 'react';
import {totalAmount, numberFormat} from '../../Functions/Funtions';

function ExpenseTotal(props) {
	const data = props.account;
	const totalValue =  totalAmount(data, "total_value");

	return (
		<div data-testid="expense_total">Expense: {numberFormat('en-AU', 'AUD', totalValue)}</div>
	)
}

export default ExpenseTotal