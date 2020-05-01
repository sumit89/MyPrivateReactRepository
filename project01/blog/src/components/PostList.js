import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    // call the action creator when PostList component is initially shown over the screen
    //this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
            {/* first approach */}
            {/* <UserHeader user={this.props.users.find(user => user.id === this.props.userId)} /> */}
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    // return <div>PostList</div>
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

// always called when when passing data from redux to react
const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  //{ fetchPostsAndUsers }
  // ES2015 syntax
  // { fetchPosts }
  { fetchPostsAndUsers }
)(PostList);
