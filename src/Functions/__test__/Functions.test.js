import {totalAmount, numberFormat, persentageValue} from "../Funtions";

test("Total value should be 3660.36", () => {
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

	const totalValue = totalAmount(data , "total_value");

	expect(totalValue).toBe(3660.36);
})

test("number format should be $1,830", () => {
	const num = 1830;

	const totalValue = numberFormat('en-AU', 'AUD', num);

	expect(totalValue).toBe("$1,830");
})

test("number format should be ￥12,830", () => {
	const num = 12830;

	const totalValue = numberFormat('ja-JP', 'JPY', num);

	expect(totalValue).toBe("￥12,830");
})

test("persentageValue should be 20%", () => {
	const totalValue = persentageValue('en-AU', 2, 10);
	expect(totalValue).toBe("20%");
})