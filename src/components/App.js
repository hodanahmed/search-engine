import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class App extends React.Component {
	state = { images: [] };
	 onSearchSubmit = async (input) => {
		// Documentation states that the end point of Unsplahs API is rootURL/search/photos
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: {query: input},
			headers: {
				Authorization: `Client-ID brtn-_hIldVnz5PQ6ndsQuyEw1TcZGAxwzTMFdwGswk`
			}
		})
			// let data = response.data.results
			// data.forEach(element => console.log(element.urls))
			// return (<img alt="these are things" src={response.data.results[0].urls.raw}/>)
		this.setState({ images: response.data.results })
	}
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} images
			</div>
		)
	};
};

export default App;
