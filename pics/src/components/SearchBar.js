import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // default behaviour of a form element when enter is pressed the page refreshes
  //onFormSubmit(event) { //"this" will be undefined
  //onFormSubmit: function(event) { //"this" will be undefined
  // arrow function makes sure that the value of "this" is always equal to SearchBar
  onFormSubmit = event => {
    // disable the default behaviour
    event.preventDefault();
    console.log(this.state.term);
    // send the term back to App which should make the api request
    // props used for the first time in a class based component
    // the only difference is inside class based component props is referenced with "this"
    this.props.onSubmit(this.state.term);
    //this.props.myFormSubmit(this.state.term);
  };

  // // called automatically from render as callback
  // onInputChange(event){
  //   // event is a js object that contains a bunch of events just occurred
  //   console.log(event.target.value);
  // }

  // // called automatically from render as callback
  // onInputClick(){
  //   // event is a js object that contains a bunch of events just occurred
  //   console.log("input got clicked");
  // }

  render() {
    return (
      <div className="ui segment">
        
        {/* make sure to invode onFormSubmit with parenthesis */}
        {/* <form onSubmit={e => this.onFormSubmit(e)} className="ui form">  */}
        {/* onSubmit is a special property when passed as a prop */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              // to make the element controlled earlier it was uncontrolled element
              value={this.state.term}
              // onChange is a special property when passed as a prop
              onChange={e => this.setState({ term: e.target.value.toUpperCase() })}
              // use arrow function and no need to define a separate fucntion as onInputChange
              //onChange={(event) => console.log(event.target.value)}
              //onChange={(e) => console.log(e.target.value)}
              // onInputChange is a callback function and thus parenthesis must not be used when passed to any event handler like onInputChange
              // thus onInputChange will be called automatically when the component is rendered
              // passing the reference of the function to the input element
              // onChange is a special property name
              // different events will be wired up with different property names
              // there are many other specail properties for wiring up event handlers
              //onChange={this.onInputChange}
              //onClick={this.onInputClick}

              // a div cannot be wired up with onChange or onSubmit
              // a div can be wired up with onClick
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
