import React from 'react'
import {totalAmount, persentageValue} from '../../Functions/Funtions';

const NetProfitMargin = (props) => {
	const data = props.account;
	// fliter revenu data
	const revenueData = data.filter((r) => r.account_category === "revenue");
	// fliter expense data
	const expenseData = data.filter((e) => e.account_category === "expense");

	// get revenu total value
	const totalRevenue = revenueData.length ? totalAmount(revenueData, "total_value") : 0;
	// get expense total value
	const totalExpense = expenseData.length ? totalAmount(expenseData, "total_value") : 0;
	
	// calcuate net profit margen
	const netProfitMargin = (totalRevenue - totalExpense);

	return (
		<div data-testid="net-profit-margin">Net Profit Margin: {persentageValue('en-AU', netProfitMargin, totalRevenue)}</div>
	)
}

export default NetProfitMargin