import React from "react";
import { render, screen } from "@testing-library/react";
import RevenueTotal from "../RevenueTotal"

test("Total Revenue should be $32,431", () => {
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
		}]

	render(<RevenueTotal account={data} />);
	const revenueTotalValue = screen.getByTestId("revenue_total");

	expect(revenueTotalValue.textContent).toBe("Revenue: $32,431");
})

test("Total Revenue should be $62,431", () => {
	const data = [
		{
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
			"value_type": "credit",
			"account_name": "Sales",
			"account_type": "sales",
			"account_type_bank": "",
			"system_account": "",
			"total_value": 30000.0
		}
	]

	render(<RevenueTotal account={data} />);
	const revenueTotalValue = screen.getByTestId("revenue_total");

	expect(revenueTotalValue.textContent).toBe("Revenue: $62,431");
})
