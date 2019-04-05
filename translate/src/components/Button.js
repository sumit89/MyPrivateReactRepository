import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

  // property name contextType is fixed
  // not required when using consumer to fetch the data
  // static contextType = LanguageContext;

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          { ({language}) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }


  render() {
    // console.log(this.context);
    return (

      // <ColorContext.Consumer>
      //   {({color}) => this.renderButton(color)}
      // </ColorContext.Consumer>

      // approach2 using consumer
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>

      // <button className="ui button primary">Submit</button>
      
      // <ColorContext.Consumer>
      //   {color => 
      //     // <button className="ui button primary">
      //     <button className={`ui button ${color}`}>
      //       {/* approach1 using context */}
      //       {/* {this.renderSubmit(this.context)} */}
      //       {/* approach2 using consumer */}
      //       <LanguageContext.Consumer>
      //         {language => this.renderSubmit(language)}
      //       </LanguageContext.Consumer>
      //     </button>
      //   }
      // </ColorContext.Consumer>      
    );
  }
}

// property name contextType is fixed
// Button.contextType = LanguageContext;

export default Button;
