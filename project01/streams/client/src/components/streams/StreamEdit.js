import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    // every route must fetch its own data and load into the redux state
    // it must not be dependent on any other component to load data
    this.props.fetchStream(this.props.match.params.id);
  }

  // used as callback for StreamForm
  onSubmit = formValues => {
    // formValues should only contains properties that are supposed to be changed
    // id and userid must not be changed and thus they should not be available
    // backend server may have some validation for id and userid check in case of put and update
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        {/* {this.props.stream.title} */}
        {/* do not place entire properties of the form */}
        {/* <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit} /> */}
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
      // <div>StreamEdit</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // ownprops is same as props
  // console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);

// export default StreamEdit;
