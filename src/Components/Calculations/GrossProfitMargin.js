import React from 'react'
import {totalAmount, persentageValue} from '../../Functions/Funtions';

const GrossProfitMargin = (props) => {

	const data = props.account;
	// fliter revenu data
	const revenueData = data.filter((r) => r.account_category === "revenue");
	// get total revenu values
	const totalRevenue = revenueData.length ? totalAmount(revenueData, "total_value") : 0;
	
	// fliter Gross Profit value; account type is sales and value type is debit
	const grossProfit = data.filter((d) => (d.account_type === "sales" && d.value_type === "debit"));
	// get total Gross Profit values 
	const grossProfitTotal = grossProfit.length ? totalAmount(grossProfit, "total_value") : 0;

	return (
		<div data-testid="gross-profit-margin">Gross Profit Margin: {persentageValue('en-AU', grossProfitTotal, totalRevenue)}</div>
	)
}

export default GrossProfitMargin