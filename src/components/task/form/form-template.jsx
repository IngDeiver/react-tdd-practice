import React from "react";
import PropTypes from 'prop-types'

const TaskFormTemplate = (props) => {
  const { title, onChange, addTask } = props;
  return (
    <>
      <div className="container">
        <h1 data-testid="task-form-title" className="my-2 text-center text-muted">
          New task
        </h1>
        <input
          data-testid="input-title-task"
          className="form-control"
          type="text"
          onChange={onChange}
          value={title}
          placeholder="Write a task..."
        />
        <button
          className="btn btn-block btn-success my-2"
          data-testid="btn-add-task"
          onClick={addTask}
          disabled={title === ""}
        >
          Add task
        </button>
      </div>
    </>
  );
};
TaskFormTemplate.propTypes = {
  title: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired, 
  addTask:PropTypes.func.isRequired
}

export default React.memo(TaskFormTemplate);
