import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    // next line will come into picture only when callback passed as props from App into SearchBar
    // TODO: make sure we call callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              // change to controlled element by hooking it up to state
              value={this.state.term}
              onChange={this.onInputChange}
              //onChange={e => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
      // <div>SearchBar</div>
    );
  }
}

export default SearchBar;
