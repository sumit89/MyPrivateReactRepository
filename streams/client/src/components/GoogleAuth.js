import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  // moving the signed status to redux store
  // state = {isSignedIn: null};
  componentDidMount() {
    // takes some time to load fetch additional js code from google server
    // thus need a callback when it completes
    window.gapi.load('client:auth2', () => {
      // init returns a promise
      window.gapi.client
        .init({
          clientId:'495279686130-spk5tqve0p3aacqcq6e51crokqhaf7e9.apps.googleusercontent.com',
          // what part of users profile we need to access
          scope: 'email'
        })
        // this will be invoded when our gapi library is ready to use
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({isSignedIn: this.auth.isSignedIn.get()})
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  // onAuthChange = () => {
  onAuthChange = isSignedIn => {
    // component level state is no more required after redux
    // this.setState({isSignedIn: this.auth.isSignedIn.get()});
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    // if (this.state.isSignedIn === null) {
    //   // return <div> i don't know whether signed in or not</div>;
    //   return null;
    // } else if (this.state.isSignedIn) {
    //   return (
    //     // <div> i am signed in</div>
    //     <button onClick={this.onSignOutClick} className="ui red google button">
    //       <i className="google icon" />
    //       Sign Out
    //     </button>
    //   );
    // } else {
    //   return (
    //     // <div> i am not signed in</div>
    //     <button onClick={this.onSignInClick} className="ui red google button">
    //       <i className="google icon" />
    //       Sign In with Google
    //     </button>
    //   );
    // }
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
    // return <div>GoogleAuth</div>
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);

// export default connect(
//   null,
//   { signIn, signOut }
// )(GoogleAuth);

// export default GoogleAuth;
