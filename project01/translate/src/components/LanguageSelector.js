import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          // onClick={() => this.props.onLanguageChange('english')}
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange('dutch')}
          // onClick={() => this.props.onLanguageChange('dutch')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
