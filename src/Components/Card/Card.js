import React from 'react'
import "./Card.css"

const Card = ({children}) => {
	return (
		<div className='c-card'>{children}</div>
	)
}
export default Card