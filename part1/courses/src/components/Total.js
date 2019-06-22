import React from "react"

const Total = ({ parts }) => {
	return (
		<p>
			Number of exercises{" "}
			{parts.reduce((prev, next) => prev + next.exercises, 0)}
		</p>
	)
}

export default Total
