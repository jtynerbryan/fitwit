import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const Exercise  = (props) => {
	return <div>
		<h1>{props.exercise.name}</h1>
		{props.exercise.description? props.exercise.description.replace(/[<p></p>]+/g, ''): null}
	</div>
}

export default Exercise