import React from "react";
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "reactstrap";

TodoList.propTypes = {
  todos: PropTypes.array, // isRequre thì ko cần khởi tạo giá trị mặc định
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { onTodoClick, todos } = props;

  function onHandleTodoClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <div className="todo-list">
      <h2 className="text-center">Todo List</h2>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id} onClick={() => onHandleTodoClick(todo)}>
            {todo.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
