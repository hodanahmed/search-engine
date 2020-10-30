import React from "react"

class SearchBar extends React.Component {
	state = {
		input: "",
	}

	//  onInputChange(e) {
	//      this.setState({ input: e.target.value })
	//     }
	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Image search</label>
						{/* onChange is an event handler that will run when the input change. */}
						<input
							type="text"
                            placeholder="Enter text"
                            // We set the value as the current value of the input in order to have a controlled form element.
							value={this.state.input}
							onChange={(e) => this.setState({ input: e.target.value })}
						/>
						<input type="submit" />
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
