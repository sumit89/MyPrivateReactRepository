import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        {/* <label>{this.context}</label> */}
        <label>{text}</label>
        {/* <label>Name</label> */}
        <input />
      </div>
    );
  }
}

export default Field;
  