import React from "react";
import PropTypes from "prop-types";

const TaskDetailTemplate = (props) => {
  const { task, onRemoveTask } = props;

  return (
    <div className="card my-2 mx-2">
      <div className="card-body">
        <div className="d-flex ">
          <p>{task.taskId}</p>  
          <span>{`: ${task.title}`}</span>
          <button
            data-testid="btn-delete-task"
            className="btn btn-sm btn-danger mx-2"
            onClick={onRemoveTask}
          >
            Delete
          </button>
          <button
            data-testid="btn-delete-task"
            className="btn btn-sm btn-warning mx-2"
          >
            Udate
          </button>
        </div>
      </div>
    </div>
  );
};

TaskDetailTemplate.propTypes = {
  task: PropTypes.object.isRequired,
};

export default React.memo(TaskDetailTemplate);
