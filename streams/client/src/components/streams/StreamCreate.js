import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

  // onSubmit(event) {
  //   // no need to call as redux form is taking care of this
  //   // when we are calling handleSubmit from redux
  //   // event.preventDefault();
  // };


  // // refactoring moved to StreamForm
  // renderError({error, touched}) {
  //   // error message is available but not visible
  //   // bcoz semantic ui by default hides error messages
  //   // css display is none which is hiding the error
  //   if(touched && error) {
  //     return (
  //       <div className="ui error message">
  //         <div className="header">{error}</div>
  //       </div>
  //     );
  //   }
  // }

  // onSubmit(formValues) {
  //   console.log(formValues);
  // };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  // renderInput(formProps) {
  //   console.log(formProps);
  //   // return <input 
  //   //   onChange={formProps.input.onChange} 
  //   //   value={formProps.input.value}
  //   // />
  //   // jsx syntax
  //   return <input {...formProps.input} />
  //   // return <input />
  // }

  // refactored moved to StreamForm
  // renderInput = ({input, label, meta}) => {
  //   // seems there is some problem as it's called twice at app load
  //   // it should be called only once with validation
  //   // console.log("render input called", meta);
  //   // console.log(input);
  //   const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
  //   return (
  //     // <div className="field">
  //     <div className={className}>
  //       <label>{label}</label>
  //       <input {...input} autoComplete="off" />
  //       {/* <div>{meta.error}</div> */}
  //       {this.renderError(meta)}
  //     </div>
  //   );
  // };

  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
      
      // <div>StreamCreate</div>

      // // refactored moved to StreamForm
      // // handleSubmit is added by redux into props
      // <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
      //   <Field name='title' component={this.renderInput} label="Enter Title:" />
      //   {/* <Field name='title' /> */}
      //   <Field name='description' component={this.renderInput} label="Enter Description:" />
      //   {/* <Field name='description' /> */}
      //   <button className="ui button primary">Submit</button>
      // </form>
      // <div>StreamCreate</div>
    );
  }

}

// // refactored moved to StreamForm
// const validate = (formValues) => {
//   const errors = {};
//   if(!formValues.title) {
//     errors.title = 'you must enter a title';
//   }
//   if(!formValues.description) {
//     errors.description = 'you must enter a description';
//   }
//   return errors;
// };

export default connect(
  null,
  { createStream }
)(StreamCreate);

// export default reduxForm({
//   form: 'streamCreate',
//   // validate: validate
//   // jsx syntax
//   validate
// })(StreamCreate);

// export default connect()(reduxForm({
//   form: 'streamCreate',
//   // validate: validate
//   // jsx syntax
//   validate
// })(StreamCreate));

// // refactored moved to StreamForm
// const formWrapped = reduxForm({
//   form: 'streamCreate',
//   // validate: validate
//   // jsx syntax
//   validate
// })(StreamCreate);
// export default connect(null, {createStream}) (formWrapped);

// export default StreamCreate;
