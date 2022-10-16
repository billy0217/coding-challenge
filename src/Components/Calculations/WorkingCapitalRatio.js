import React from 'react'
import {totalAmount, persentageValue} from '../../Functions/Funtions';

function WorkingCapitalRatio(props) {
	const data = props.account;
	// filter first assets data; accout category is assets, value type is debit nighter accout type is currnt, banck or current accunt recivable 
	const firstAssets = data.filter((d) => (
			d.account_category === "assets" && 
			d.value_type === "debit" &&
			(d.account_type === "current" || d.account_type === "bank" || d.account_type === "current_accounts_receivable")
		));
	
	// filter second assets data; accout category is assets, value type is credit nighter accout type is currnt, banck or current accunt recivable
	const secondAssets = data.filter((d) => (
		d.account_category === "assets" && 
		d.value_type === "credit" &&
		(d.account_type === "current" || d.account_type === "bank" || d.account_type === "current_accounts_receivable")
	));
	
	// get total first assets value
	const firstAssetsTotal = firstAssets.length ? totalAmount(firstAssets, "total_value") : 0;
	// get total second assets value
	const secondAssetsTotal = secondAssets.length ? totalAmount(secondAssets, "total_value") : 0;
	// get total assets value
	const assetsValue = firstAssetsTotal - secondAssetsTotal;
	

	// filter first liabilities data; accout category is liability, value type is credit nighter accout type is currnt or current accunt recivable 
	const firstLiabilities = data.filter((d) => (
		d.account_category === "liability" && 
		d.value_type === "credit" &&
		(d.account_type === "current" || d.account_type === "current_accounts_payable")
	));
	// filter second liabilities data; accout category is liability, value type is credit nighter accout type is currnt or current accunt recivable 
	const secondLiabilities = data.filter((d) => (
		d.account_category === "liability" && 
		d.value_type === "debit" &&
		(d.account_type === "current" || d.account_type === "current_accounts_payable")
	));
	// get total first liabilities value
	const firstLiabilitiesTotal = firstLiabilities.length ? totalAmount(firstLiabilities, "total_value") : 0;
	// get total second liabilities value
	const secondLiabilitiesTotal = secondLiabilities.length ? totalAmount(secondLiabilities, "total_value") : 0;
	// get total liabilities value
	const liabilitiesTotal = firstLiabilitiesTotal - secondLiabilitiesTotal;	

	return (
		<div data-testid="working-capital-ratio">Working Capital Ratio: {persentageValue('en-AU', assetsValue, liabilitiesTotal)}</div>
	)
}

export default WorkingCapitalRatio