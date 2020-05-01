import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  // automatically goes inside the constructor during babel conversion to js code which every browser can understand
  // initialized as an instance property
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      // passing the state down to child as prop
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  // React says we must have to define render returning some jsx
  render() {
    // just an example no red border is going to be shown
    return <div className="border red">{this.renderContent()}</div>;
  }

  // //there are two different ways to initialize state
  // //first is inside the constructor
  // //second is using the lifecycle methods

  // // not mandatory to define the constructor
  // // used only when we need some initial setup when component is created
  // constructor(props){
  //   console.log("constructor called");
  //   // this is mandatory if constuctor is used
  //   super(props);
  //   // this is the only time we do direct assignment to this.state
  //   this.state = { lat: null, errorMessage: '' };
  //   // standard practice is not to do data loading within the constructor
  //   // thus we sholuld take this to componentDidMount if data has to be loaded only once
  //   // like knowing the physical lcoation of the user or an api request
  //   // it gives more clear code to other users
  //   window.navigator.geolocation.getCurrentPosition(
  //     // callback function and thus will be called sometime in the future
  //     position => {
  //       console.log(position);
  //       // we must not do a direct assingment
  //       //this.state.lat = position.coords.latitude;
  //       this.setState({ lat: position.coords.latitude });
  //     },
  //     err => {
  //       console.log(err);
  //       this.setState({ errorMessage: err.message });
  //     }
  //   );
  // }

  // componentDidMount(){
  //   console.log("componentDidMount method called automatically only one time when the component gets rendered for the first time");
  // }
  // componentDidUpdate(){
  //   // state changes
  //   // component gets a new set of props from its parent
  //   // do some data loading everytime when a component is updated
  //   // like a network request every single time a user clicks a button
  //   console.log("componentDidUpdate method called multiple times whenever setState gets called and component gets rerendered");
  // }
  // componentWillUnmount(){
  //   // used to remove a component from the screen and do some cleanup
  //   // remove non react libraries like google maps
  //   console.log("componentWillUnmount method called for clean up after component need not be rendered any more");
  // }

  // render(){
  //   console.log("render method called");
  //   // not advisable to keep it here as it takes considerable amount of time and thus degrades performance
  //   // render method called more frequently than we can imagine
  //   // thus moving inside the constructor
  //   // window.navigator.geolocation.getCurrentPosition(
  //   //   position => {
  //   //     console.log(position);
  //   //     this.setState({ lat: position.coords.latitude });
  //   //   },
  //   //   err => {
  //   //     console.log(err);
  //   //     this.setState({ errorMessage: err.message });
  //   //   }
  //   // );

  //   // be careful to remove the semicolon when returning the content in paranthesis

  //   // return (
  //   //   <div>
  //   //     Latitude: {this.state.lat}
  //   //     <br/>
  //   //     Error: {this.state.errorMessage}
  //   //   </div>
  //   // );
  //   // Avoid conditions within render method
  //   // bcoz when a new requirement comes in we have to make the same change in all the conditions
  //   if(this.state.errorMessage && !this.state.lat){
  //     return <div>Error: {this.state.errorMessage}</div>
  //   }
  //   if(!this.state.errorMessage && this.state.lat){
  //     return <div>Latitude: {this.state.lat}</div>
  //   }
  //   return <div>Loading...</div>
  // }


}


// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   // difficult to show the latitude with a functional component
//   // cannot access position in the div
//   // position may not be ready when next stmt is executed
//   return <div>Latitude: </div>
// };

ReactDOM.render(<App />, document.querySelector('#root'));
