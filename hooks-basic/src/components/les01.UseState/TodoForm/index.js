import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState({
    name: "",
    description: "",
  });

  function onHandleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(value);
    }

    setValue({ name: "", description: "" });
  }

  return (
    <div className="form-create-todo">
      <h2 className="text-center">Create a new Todo</h2>
      <Form onSubmit={onHandleSubmit}>
        <FormGroup row>
          <Label for="idName" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="idName"
              placeholder="name placeholder"
              value={value.name}
              onChange={onHandleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="idDes" sm={2}>
            Description
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="description"
              id="idDes"
              placeholder="description placeholder"
              value={value.description}
              onChange={onHandleChange}
            />
          </Col>
        </FormGroup>
        <div className="btn">
          <Button style={{ marginRight: 10 }} onClick={onHandleSubmit}>
            Submit
          </Button>
          <Button>Cancel</Button>
        </div>
      </Form>
    </div>
  );
}

export default TodoForm;
