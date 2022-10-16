import React from "react";
import { render, screen } from "@testing-library/react";
import NetProfitMargin from "../NetProfitMargin";

test("Net Profit Margin should be 89%", () => {
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
		"account_category" : "expense",
		"account_code" : "400",
		"account_currency" : "AUD",
		"account_identifier" : "d392fe47-c99d-499e-a200-46709dd6b6e7",
		"account_name" : "Advertising",
		"account_status" : "ACTIVE",
		"account_type" : "overheads",
		"account_type_bank" : "",
		"system_account" : "",
		"total_value" : 1830.18,
		"value_type" : "debit"
	},
	{
		"account_category" : "expense",
		"account_code" : "400",
		"account_currency" : "AUD",
		"account_identifier" : "d392fe47-c99d-499e-a200-46709dd6b6e7",
		"account_name" : "Advertising",
		"account_status" : "ACTIVE",
		"account_type" : "overheads",
		"account_type_bank" : "",
		"system_account" : "",
		"total_value" : 1830.18,
		"value_type" : "debit"
	}]

	render(<NetProfitMargin account={data} />);
	const expenseTotalValue = screen.getByTestId("net-profit-margin");

	expect(expenseTotalValue.textContent).toBe("Net Profit Margin: 89%");
})