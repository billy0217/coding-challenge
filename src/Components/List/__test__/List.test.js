import React from "react";
import { render, screen } from "@testing-library/react";

import List from "../List";

test("List item account category should be revenue", () => {
	const props = {
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
	}

	render(<List account={props} />);
	const accountType = screen.getByTestId("account_category");

	expect(accountType.textContent).toBe("Category: revenue");
})

test("List item value type should be credit", () => {
	const props = {
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
	}

	render(<List account={props} />);
	const valueType = screen.getByTestId("value_type");

	expect(valueType.textContent).toBe("Type: credit");
})

test("List item account name should be Sales", () => {
	const props = {
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
	}

	render(<List account={props} />);
	const accountName = screen.getByTestId("account_name");

	expect(accountName.textContent).toBe("Account Name: Sales");
})

test("List item account status should be Sales", () => {
	const props = {
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
	}

	render(<List account={props} />);
	const accountStatus = screen.getByTestId("account_status");

	expect(accountStatus.textContent).toBe("Status: ACTIVE");
})

test("List item account total value should be $32431.00", () => {
	const props = {
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
	}

	render(<List account={props} />);
	const accountTotalValue = screen.getByTestId("total_value");

	expect(accountTotalValue.textContent).toBe("Total Value: $32431.00");
})