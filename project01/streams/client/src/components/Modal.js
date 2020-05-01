import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props => {
  return ReactDOM.createPortal(
    // first argument is jsx
    <div 
      // onClick={() => history.push('/')} 
      onClick={props.onDismiss} 
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        {/* <div className="header">Delete Stream</div> */}
        <div className="content">{props.content}</div>
        {/* <div className="content">Are you sure you want to delete this stream</div> */}
        {/* actions contanins extra div and semantic-ui does not style the modal correctly */}
        <div className="actions">{props.actions}</div>
        {/* <div className="actions">
        <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div> */}
      </div>
    </div>,
    // second argument is the reference to the element under which this portal to be rendered
    // reference to the div modal defined in public index.html file
    document.querySelector('#modal')
  );
};

export default Modal;
