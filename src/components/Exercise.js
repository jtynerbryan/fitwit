import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const Exercise  = (props) => {
	return <div>
		<h1>{props.exercise.name}</h1>
		<p>{props.exercise.description}</p>
	</div>
}

export default Exercise