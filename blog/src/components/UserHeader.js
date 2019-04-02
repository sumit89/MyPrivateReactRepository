import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    // console.log(this.props.users);
    // const user =  this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;
    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;

    // return <div>UserHeader</div>
  }
}

// unnecessary UserHeader does not need entire list of users
// const mapStateToProps = (state) => {
//   return { users: state.users };
// };


const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

// export default connect(mapStateToProps)(UserHeader);
// export default connect(null, { fetchUser })(UserHeader);
// export default connect(mapStateToProps, { fetchUser })(UserHeader);
export default connect(mapStateToProps)(UserHeader);
// export default UserHeader;
