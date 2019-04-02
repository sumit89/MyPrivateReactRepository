import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  }

  
  render() {
    return (
      // <Modal />
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        // content="Are you sure you want to delete this stream"
        actions={this.renderActions()}
        // actions={actions}
        onDismiss={() => history.push('/')}
      />
      // <div>StreamDelete</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

// const actions = (
//   // div creates problem for semantic-ui
//   // <div>
//   //   <button className="ui button negative">Delete</button>
//   //   <button className="ui button">Cancel</button>
//   // </div>
  
//   // recommended to use this syntax for quality code checkers
//   <React.Fragment>
//     <button className="ui button negative">Delete</button>
//     <button className="ui button">Cancel</button>
//   </React.Fragment>

//   // <>
//   //   <button className="ui button negative">Delete</button>
//   //   <button className="ui button">Cancel</button>
//   // </>
// );

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);

// export default StreamDelete;
