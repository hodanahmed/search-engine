In React, you can interact with components using the props system. However, this only
allows you to pass information down the syntax tree through inheritance, not up.

Currently in the app, we want to be able pass information from the Search Bar to the App.
To do this, I passed a prop into the search bar component called 'onSubmit'. The value of 
the prop 'onSubmit' was set to a function (a callback function) called 'onSearchSubmit 
which console.logs the first parameter.

   ` class App extends React.Component {
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
    }`

In the SearchBar component, I then refer to the onSubmit prop as 'this.props.onSubmit' 
and set the functions parameter to 'this.state.input'. As stated before, the first
parameter in 'onSearchSubmit' is console.logged meaning that this.state.input is
logged to the console.

    `class SearchBar extends React.Component {
	state = {
		input: "",
    }
    // Using an arrow function binds 'this' with the function so I no longer have that 
    // the error that says "cant find state of undefinied"
    onFormSubmit = (e) => {
        // Prevents default submission usually html event stuff
		e.preventDefault();
		// the onSubmit function was passed a prop from App.js. to call it, use 'this.props.onSubmit'
		// it takes the parameter 'this.state.input'. In the app, it console.logs the parameter.
       this.props.onSubmit(this.state.input)
    }
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
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
}`