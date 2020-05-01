import React from 'react';
import {BrowserRouter,HashRouter,MemoryRouter, Link} from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

// const PageOne = () => {
//   return (
//   <div>
//     PageOne
//     {/* <a href="/pageTwo">Navigate to page two</a> */}
//     <Link to="/pageTwo">Navigate to page two</Link>
//   </div>
//   );
// }

// const PageTwo = () => {
//   return (
//     <div>
//       PageTwo
//       {/* <a href="/">Navigate to page one</a> */}
//       <Link to="/">Navigate to page one</Link>
//     </div>
//     );
// }

const App = () => {
  return (
    // need full control over the history object
    // and thus creating plain router and our own history object
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            {/* this can also be mapped with /streams/new bcoz id is a variable and both will be rendered*/}
            {/* and thus switch will be used as a solution */}
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>

    // <div>
    //   <BrowserRouter>
    //     <div>
    //       {/* multiple routes can be mapped to same path */}
    //       {/* bcoz there can be deeply nested route components inside 
    //       different components in the application */}
    //       {/* <Route path="/" exact component={PageOne}/> */}
    //       {/* if exact not used routes for both pageOne and pagetwo rendered on screen */}
    //       {/* <Route path="/" exact component={PageOne}/> */}
    //       {/* by default value of exact is true */}
    //       <Route path="/" exact={true} component={PageOne}/>
    //       <Route path="/pagetwo" component={PageTwo}/>
    //     </div>  
    //   </BrowserRouter>
    // </div>

    // <div>
    //   <HashRouter>
    //     <div>
    //       <Route path="/" exact={true} component={PageOne}/>
    //       <Route path="/pagetwo" component={PageTwo}/>
    //     </div>  
    //   </HashRouter>
    // </div>

    // <div>
    //   <MemoryRouter>
    //     <div>
    //       <Route path="/" exact={true} component={PageOne}/>
    //       <Route path="/pagetwo" component={PageTwo}/>
    //     </div>  
    //   </MemoryRouter>
    // </div>

    // <div>
    //   {/* header contains link tag which can't be use outside the router */}
    //   {/* <Header /> */}
    //   <BrowserRouter>
    //     <Header />
    //     <div>
    //       <Route path="/" exact component={StreamList} />
    //       <Route path="/streams/new" exact component={StreamCreate} />
    //       <Route path="/streams/edit" exact component={StreamEdit} />
    //       <Route path="/streams/delete" exact component={StreamDelete} />
    //       <Route path="/streams/show" exact component={StreamShow} />
    //     </div>  
    //   </BrowserRouter>
    // </div>
  );
};

export default App;
