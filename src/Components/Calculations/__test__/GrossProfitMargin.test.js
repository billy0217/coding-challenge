import React from "react";
import { render, screen } from "@testing-library/react";
import GrossProfitMargin from "../GrossProfitMargin";

test("Gross Profit Margin should be 48%", () => {
	const data = [{
		"account_category": "revenue",
		"account_code": "200",
		"account_currency": "AUD",
		"account_identifier": "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
		"account_status": "ACTIVE",
		"value_type": "credit",
		"account_name": "Sales",
		"account_type": "sales",
		"account_type_bank": "",
		"system_account": "",
		"total_value": 32431.0
	},
	{
		"account_category": "revenue",
		"account_code": "200",
		"account_currency": "AUD",
		"account_identifier": "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
		"account_status": "ACTIVE",
		"value_type": "debit",
		"account_name": "Sales",
		"account_type": "sales",
		"account_type_bank": "",
		"system_account": "",
		"total_value": 30000.0
	}]

	render(<GrossProfitMargin account={data} />);
	const GrossProfitMarginValue = screen.getByTestId("gross-profit-margin");

	expect(GrossProfitMarginValue.textContent).toBe("Gross Profit Margin: 48%");
})