import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const Exercise  = (props) => {
	console.log("exercise props", props)

	return <div>
		<strong>{props.exercise.name}</strong>
		{props.exercise.description ? ReactHtmlParser(props.exercise.description) : null}
		<br></br>
	</div>
}

export default Exercise
