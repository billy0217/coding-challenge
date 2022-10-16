/**
 * Get sum of total value
 * @param {Array} data
 * @param {string} key
 * @returns {number} sum of data property value
*/
export const totalAmount = (data, key) => {
	return data?.map( d => d[key]).reduce( (a,b) =>  a + b);
}

/**
 * Thousand Separator with currency symbole
 * @param {string} localised
 * @param {string} currencyType
 * @param {number} num
 * @returns {string} Thousand Separator with currency symbole
*/

export const numberFormat = (localised, currencyType, num) => {
	return new Intl.NumberFormat(
			localised, 
			{ 
				style: 'currency', 
				currency: currencyType,
				currencyDisplay: 'narrowSymbol',
				minimumFractionDigits: 0,
				maximumFractionDigits: 0
			}
		).format(num);
};

/**
 * Calculate persentage
 * @param {string} localised
 * @param {number} amount
 * @param {number} total
 * @returns {string} persentage value with symbole
*/
export const persentageValue = (localised, amount, total) => {
	return new Intl.NumberFormat(
			localised, 
			{ 
				style: 'percent'
			}
		).format(amount/total);
}