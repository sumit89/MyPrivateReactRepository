import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { branding } = props;
  return (
    // <div>
    //   {/* <h1>Contact Manager</h1> */}
    //   {/* <h1 style={{ color: 'red', fontSize: '50px' }}>{branding}</h1> */}
    //   <h1 style={headingStyle}>{branding}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <a href="/" className="nav-link">
                Home
              </a> */}
              <Link to="/" className="nav-link">
                <i className="fa fa-home"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fa fa-plus"></i>Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fa fa-question"></i>About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: 'My App',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

// const headingStyle = {
//   color: 'green',
//   fontSize: '50px',
// };
