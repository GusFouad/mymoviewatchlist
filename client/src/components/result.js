import React from 'react';
// import { IMAGE_URL } from "./config";
const Result = ({ result, openPopup }) => {
	return (
		<div className="result" onClick={() => openPopup(result.id)}>
			{/* <img alt="" src={IMAGE_URL + result.poster_path} /> */}
			<h3>{result.original_title}</h3>
			<p>{result.overview}</p>
		</div>
	);
};

export default Result;
