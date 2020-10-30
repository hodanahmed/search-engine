import React from "react"
import SearchBar from "./SearchBar"
class App extends React.Component {
	onSearchSubmit(input) {
		console.log(input)
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				{/* Passes it down as a prop to SearchBar function*/}
				<SearchBar onSubmit={this.onSearchSubmit}/>
			</div>
		)
	}
}

export default App
