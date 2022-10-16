import React from 'react'
import {totalAmount, numberFormat} from '../../Functions/Funtions';

const RevenueTotal = (props) => {
	const data = props.account;
	const totalValue =  totalAmount(data, "total_value");

	return (
		<div data-testid="revenue_total">Revenue: {numberFormat('en-AU', 'AUD', totalValue)}</div>
	)
}

export default RevenueTotal