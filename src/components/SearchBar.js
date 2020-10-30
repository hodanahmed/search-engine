import React from "react"

class SearchBar extends React.Component {
    onInputChange(e) {
        // This function will call when there is a change to input
        console.log(e.target.value)
        // event object is passed to the argument. We can retrieve the value of the event target (input) using eventobject.target.value
    }
	render() {
		return (
			<div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image search</label> 
                        {/* onChange is an event handler that will run when the input change. */}
                        <input type="text" onChange={this.onInputChange} />
                        </div>
				</form>
			</div>
		)
	}
}

export default SearchBar
