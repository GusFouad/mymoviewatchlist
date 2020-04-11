import React, { Component } from 'react';
// import axios from 'axios';
// import { API_KEY, API_ID_URL } from './config';
import Result from './result';
class Search extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	// state = {
	// 	search: '',
	// 	result: [],
	// 	selected: {}
	// };

	// handleInput = (e) => {
	// 	let s = e.target.value;
	// 	console.log(s);
	// 	this.setState = { ...this.state.search, s };
	// };
	// search(e) {
	// 	const apiurl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;
	// 	const apiIdurl = API_ID_URL;
	// 	if (e.key === 'Enter') {
	// 		axios(apiurl + '&query=' + this.state.s).then(({ data }) => {
	// 			let results = data.results;
	// 			this.setState = { ...this.state, results };
	// 		});
	// 		//     console.log("this is data", e);
	// 	}
	// }
	render() {
		return (
			<div className="container">
				<form onSubmit={this.onSubmit}>
					<input type="text" placeholder="Search Movie" onChange={this.handleInput} onClick={this.search} />
					<button>Search</button>
					<Result />
				</form>
			</div>
		);
	}
}

export default Search;
