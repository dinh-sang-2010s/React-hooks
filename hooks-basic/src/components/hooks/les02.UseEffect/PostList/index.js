import React from "react";
import PropTypes from "prop-types";

import { ListGroup, ListGroupItem } from "reactstrap";

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

function PostList(props) {
  const { posts } = props;
  return (
    <div className="todo-list">
      <h2 className="text-center">Post List</h2>
      <ListGroup>
        {posts.map((post) => (
          <ListGroupItem key={post.id}>{post.title}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default PostList;
