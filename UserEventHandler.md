Event handling in React

Event handling in React is the same as in HTML and JS.
You can manipulate the event object to retrieve data from the DOM.
There are Event handlers like onClick, onSubmit etc that only runs when the user triggers an event.
It also is still a callback function.
There are a few differences:

1.)When you refer to a function, you cannot add the parantheses as it means that it will run as soon as the component mounts.

2.)Controlled and Uncontrolled elements
    Uncontrolled elements is when all the data is stored in the DOM. 
    The only way we can retrieve data is straight from the DOM event object.

    Controlled elements means that we keep the value data within React, in a state or prop for example.
    For example:
         <input 
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.setState({password: e.target.value})}
                        />
            When the onChange event is called in the element, it changes the password state to the value of the input. 
            However, we also set the value of the input to the state of password. This is to make sure that when we 
            retrieve data from the DOM, we keep it within React. 

There also may be errors about context issues with 'this'. 
The best way to deal with this just using arrow function as it inherently binds 'this' without you stating it. 
