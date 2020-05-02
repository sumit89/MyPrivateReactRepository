import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

export default class Contacts extends Component {
  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: 'dfsfsdf',
  //       email: 'sffsfsfsf',
  //       phone: 'sdfsfsfsdf',
  //     },
  //     {
  //       id: 2,
  //       name: 'khkhk',
  //       email: 'fghfghf',
  //       phone: 'hjkhjkhk',
  //     },
  //     {
  //       id: 3,
  //       name: 'rtyryr',
  //       email: 'rtyrtyrtyr',
  //       phone: 'yrtyrtyrtyr',
  //     },
  //   ],
  // };
  // no need to use constructor for states
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [],
  //   };
  // }

  // this is where context/redux are useful in multiple nested components
  // deleteContact = (id) => {
  //   console.log(id);
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter((contact) => contact.id !== id);
  //   this.setState({ contacts: newContacts });
  // };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span>
              </h1>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // const { contacts } = this.state;
    // return (
    //   // react fragment is pseudo element used when div not required
    //   // <div>
    //   <React.Fragment>
    //     {contacts.map((contact) => (
    //       // <h1 key={contact.id}>{contact.name}</h1>
    //       <Contact
    //         key={contact.id}
    //         contact={contact}
    //         // name={contact.name}
    //         // email={contact.email}
    //         // phone={contact.phone}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //   </React.Fragment>
    //   // </div>
    // );
  }
}
