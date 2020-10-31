import React from "react"

class SearchBar extends React.Component {
	state = {
		input: "",
    }
    onFormSubmit = (e) => {
		e.preventDefault();
	   this.props.onSubmit(this.state.input)
    }
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image search</label>
						<input
							type="text"
							placeholder="Enter text"
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
