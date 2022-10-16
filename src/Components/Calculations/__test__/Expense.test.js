import React from "react";
import { render, screen } from "@testing-library/react";
import ExpenseTotal from "../ExpenseTotal";

test("Total Expense should be $1,830", () => {
	const data = [{
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

	render(<ExpenseTotal account={data} />);
	const expenseTotalValue = screen.getByTestId("expense_total");

	expect(expenseTotalValue.textContent).toBe("Expense: $1,830");
})

test("Total Expense should be $3,660", () => {
	const data = [
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
		}
	]

	render(<ExpenseTotal account={data} />);
	const expenseTotalValue = screen.getByTestId("expense_total");

	expect(expenseTotalValue.textContent).toBe("Expense: $3,660");
})