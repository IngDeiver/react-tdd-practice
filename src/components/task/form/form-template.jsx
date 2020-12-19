import React from "react";

const TaskFormTemplate = (props) => {
  const { title, onChange, addTask } = props;
  return (
    <>
      <div className="container">
        <h1 data-testid="task-form-title" className="my-2 text-center">
          New task
        </h1>
        <input
          data-testid="input-title-task"
          className="form-control"
          type="text"
          onChange={onChange}
          value={title}
        />
        <button
          className="btn btn-block btn-success my-2"
          data-testid="btn-add-task"
          onClick={addTask}
        >
          Add task
        </button>
      </div>
    </>
  );
};

export default React.memo(TaskFormTemplate);
