import React, { Component } from 'react';
// import logo from './logo.svg';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Contact from './components/contacts/Contact';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import { Provider } from './context';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

// function App() {
//   return <div className="App"></div>;
// }

class App extends Component {
  render() {
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'App Component')
    // );
    // const name = 'sumit';
    // const showHello = true;
    // const showMath = true;
    // const n1 = 30;
    // const n2 = 40;
    // most variables will be coming either from states or proper in reality

    // let math;
    // if (showMath) {
    //   math = (
    //     <h4>
    //       {n1}+{n2}={n1 + n2}
    //     </h4>
    //   );
    // } else {
    //   math = null;
    // }
    return (
      <Provider>
        {/* <Router basename={process.env.PUBLIC_URL}> */}
        <Router>
          <div className="App">
            {/* <h1>App Component</h1> */}
            <Header branding="Contact Manager" />
            {/* <Header /> */}
            <div className="container">
              {/* <Contact
            name="Sumit Suman"
            email="abc@gmail.com"
            phone="555-555-5555"
          />
          <Contact
            name="Amit Suman"
            email="abc@gmail.com"
            phone="555-555-5555"
          /> */}
              {/* <AddContact />
              <Contacts /> */}
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact component={NotFound} />
                {/* <Route exact path="/about/:id" component={About} /> */}
              </Switch>
            </div>
            {/* {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
        {math} */}
            {/* <label htmlFor="name">Name</label> */}
            {/* <input type="text" /> */}
            {/* <br /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
