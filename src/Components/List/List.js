import React from 'react'

const List = (props) => {

	const data = props.account;

	return (
		<div role="list" className="c-list">
			<div role="listitem" className="c-list-item" data-testid="account_category"><span>Category:</span> {data.account_category}</div>
			<div role="listitem" className="c-list-item" data-testid="value_type"><span>Type:</span> {data.value_type}</div>
			<div role="listitem" className="c-list-item" data-testid="account_name"><span>Account Name:</span> {data.account_name}</div>
			<div role="listitem" className="c-list-item" data-testid="account_status"><span>Status:</span> {data.account_status}</div>
			<div role="listitem" className="c-list-item" data-testid="total_value"><span>Total Value:</span> ${data.total_value.toFixed(2)}</div>
		</div>
	)
}

export default List;