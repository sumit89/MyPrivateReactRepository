import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  // state = {language: 'english'};

  // onLanguageChange = language => {
  //   this.setState({ language });
  // };

  render() {
    return (
      <div className="ui container">
        
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>

        {/* <LanguageSelector onLanguageChange={this.onLanguageChange}/> */}

        {/* <div>
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div> */}

        {/* {this.state.language} */}
        {/* value is special prop name to the Provider */}
        {/* multiple contexts can be wrapped in any order */}
        {/* ColorContext under LanguageContext or LanguageContext under ColorContext */}
        {/* <ColorContext.Provider value="primary"></ColorContext.Provider> */}
        
        {/* <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
              <UserCreate  />
          </LanguageContext.Provider>
        </ColorContext.Provider> */}

        {/* separate pipe will be created and will get english always from the provi*/}
        {/* <LanguageContext.Provider value="english">
          <UserCreate  />
        </LanguageContext.Provider> */}

        {/* always get the default value */}
        {/* <UserCreate  /> */}
      </div>
    );
  }
}

export default App;
