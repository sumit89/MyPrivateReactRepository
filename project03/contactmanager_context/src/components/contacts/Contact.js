import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
// import './contact.css';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired,
  // };
  // constructor() {
  //   super();
  //   this.state = {};
  //   this.onShowClick = this.onShowClick.bind(this);
  // }
  state = {
    showContactInfo: false,
  };
  // onDeleteClick = (id, dispatch) => {
  //   // without api call it will only remove from dom
  //   // dispatch({ type: 'DELETE_CONTACT', payload: id });
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => dispatch({ type: 'DELETE_CONTACT', payload: id }));
  // };
  // for non arrow funciton use async at before paramethers
  onDeleteClick = async (id, dispatch) => {
    // jsonplaceholder just gives an empty object in case of delete
    // await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    // dispatch({ type: 'DELETE_CONTACT', payload: id });
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  // onShowClick() {
  //   console.log(this.state);
  // }
  // no this binding is required or in the constructor if we use arrow function
  // onShowClick = (e) => {
  //   // console.log(e.target);
  //   // state is immutable and thus do not mutate it directly
  //   // this.state = { showContactInfo: false };
  //   this.setState({ showContactInfo: !this.state.showContactInfo });
  // };
  // onShowClick = (name, e) => {
  //   console.log(name);
  // };

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  //   console.log(nextProps, nextState);
  // }

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    // const { contact } = this.props;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fa fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fa fa-edit"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem',
                    }}
                  ></i>
                </Link>
              </h4>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-goup-item">Email:{email}</li>
                  <li className="list-goup-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>

      // <div className="card card-body mb-3">
      //   {/* <h1>Contact Component</h1> */}
      //   <h4>
      //     {name}{' '}
      //     <i
      //       // onClick={this.onShowClick.bind(this, name)}
      //       // onClick={this.onShowClick}
      //       onClick={() =>
      //         this.setState({ showContactInfo: !this.state.showContactInfo })
      //       }
      //       className="fa fa-sort-down"
      //       style={{ cursor: 'pointer' }}
      //     />
      //     <i
      //       className="fa fa-times"
      //       style={{ cursor: 'pointer', float: 'right', color: 'red' }}
      //       // onClick={() => this.props.deleteClickHandler()}
      //       onClick={this.onDeleteClick}
      //     ></i>
      //   </h4>

      //   {showContactInfo ? (
      //     <ul className="list-group">
      //       <li className="list-goup-item">Email:{email}</li>
      //       <li className="list-goup-item">Phone:{phone}</li>
      //     </ul>
      //   ) : null}

      //   {/* <h4>{contact.name}</h4>
      //   <ul className="list-group">
      //     <li className="list-goup-item">Email:{contact.email}</li>
      //     <li className="list-goup-item">Phone:{contact.phone}</li>
      //   </ul> */}
      // </div>
    );
  }
}

Contact.propTypes = {
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  // deleteClickHandler: PropTypes.func.isRequired,
};
