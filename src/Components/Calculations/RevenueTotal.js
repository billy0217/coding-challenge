import React from 'react'
import {totalAmount, numberFormat} from '../../Functions/Funtions';

const RevenueTotal = (props) => {
	const data = props.account;
	// get revenue total value
	const totalValue =  data.length ? totalAmount(data, "total_value") : 0;

	return (
		<div data-testid="revenue_total">Revenue: {numberFormat('en-AU', 'AUD', totalValue)}</div>
	)
}

export default RevenueTotal