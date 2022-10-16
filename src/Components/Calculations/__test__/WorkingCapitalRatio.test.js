import React from "react";
import { render, screen } from "@testing-library/react";
import WorkingCapitalRatio from "../WorkingCapitalRatio";

test("Working Capital Ratio should be 63%", () => {
	const data = [{
		"account_category": "assets",
		"account_code": "200",
		"account_currency": "AUD",
		"account_identifier": "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
		"account_status": "ACTIVE",
		"value_type": "credit",
		"account_name": "Sales",
		"account_type": "current",
		"account_type_bank": "",
		"system_account": "",
		"total_value": 32431.0
	},
	{
		"account_category": "assets",
		"account_code": "200",
		"account_currency": "AUD",
		"account_identifier": "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
		"account_status": "ACTIVE",
		"value_type": "debit",
		"account_name": "Sales",
		"account_type": "current_accounts_receivable",
		"account_type_bank": "",
		"system_account": "",
		"total_value": 10749.5
	},
	{
		"account_category": "assets",
		"account_code": "200",
		"account_currency": "AUD",
		"account_identifier": "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
		"account_status": "ACTIVE",
		"value_type": "debit",
		"account_name": "Sales",
		"account_type": "bank",
		"account_type_bank": "",
		"system_account": "",
		"total_value": 30000.0
	},
	{
		"account_category": "liability",
		"account_code": "200",
		"account_currency": "AUD",
		"account_identifier": "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
		"account_status": "ACTIVE",
		"value_type": "credit",
		"account_name": "Sales",
		"account_type": "current",
		"account_type_bank": "",
		"system_account": "",
		"total_value": 32431.0
	},
	{
		"account_category": "liability",
		"account_code": "200",
		"account_currency": "AUD",
		"account_identifier": "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
		"account_status": "ACTIVE",
		"value_type": "debit",
		"account_name": "Sales",
		"account_type": "current",
		"account_type_bank": "",
		"system_account": "",
		"total_value": 19212.21
	}]

	render(<WorkingCapitalRatio account={data} />);
	const WorkingCapitalRatioValue = screen.getByTestId("working-capital-ratio");

	expect(WorkingCapitalRatioValue.textContent).toBe("Working Capital Ratio: 63%");
})