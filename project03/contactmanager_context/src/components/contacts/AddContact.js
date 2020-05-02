import React, { Component } from 'react';
import { Consumer } from '../../context';
// import { v4 as uuid } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

// controlled component
export default class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  // onSubmit = (dispatch, e) => {
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    // console.log(this.state);
    const { name, email, phone } = this.state;
    if (name === '') {
      this.setState({ errors: { name: 'name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'phone is required' } });
      return;
    }
    const newContact = {
      // id: uuid(),
      name,
      email,
      phone,
    };
    // dispatch({ type: 'ADD_CONTACT', payload: newContact });

    // axios
    //   .post('https://jsonplaceholder.typicode.com/users', newContact)
    //   .then((res) => dispatch({ type: 'ADD_CONTACT', payload: res.data }));

    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      newContact
    );
    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    // clear state after addition
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });

    this.props.history.push('/');
  };
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter Name"
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone"
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  {/* <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );

    // return (
    //   <div className="card mb-3">
    //     <div className="card-header">Add Contact</div>
    //     <div className="card-body">
    //       <form onSubmit={this.onSubmit}>
    //         <div className="form-group">
    //           <label htmlFor="name">Name</label>
    //           <input
    //             type="text"
    //             name="name"
    //             className="text form-control form-control-lg"
    //             placeholder="Enter Name"
    //             value={name}
    //             onChange={this.onChange}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="email">Email</label>
    //           <input
    //             type="email"
    //             name="email"
    //             className="text form-control form-control-lg"
    //             placeholder="Enter Email"
    //             value={email}
    //             onChange={this.onChange}
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label htmlFor="phone">Phone</label>
    //           <input
    //             type="text"
    //             name="phone"
    //             className="text form-control form-control-lg"
    //             placeholder="Enter Phone"
    //             value={phone}
    //             onChange={this.onChange}
    //           />
    //         </div>
    //         <input
    //           type="submit"
    //           value="Add Contact"
    //           className="btn btn-light btn-block"
    //         />
    //       </form>
    //     </div>
    //   </div>
    // );
  }
}
