import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
	state = { images: [] };
	 onSearchSubmit = async (input) => {
		// Documentation states that the end point of Unsplahs API is rootURL/search/photos
		const response = await unsplash.get('/search/photos', {
			params: {query: input},
		})
		this.setState({ images: response.data.results })
	}
	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList imagelist={this.state.images} />
			</div>
		)
	};
};

export default App;
