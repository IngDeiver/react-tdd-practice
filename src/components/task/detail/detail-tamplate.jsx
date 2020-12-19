import React from "react";
import PropTypes from "prop-types";

const TaskDetailTemplate = (props) => {

  const {task, onRemoveTask} = props

  return (
    <div className="card my-2 mx-2">
      <div className="card-body">
        <p>{task.taskId}</p>
        <button
          data-testid="btn-delete-task"
          className="btn btn-sm btn-warning"
          onClick={onRemoveTask}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

TaskDetailTemplate.propTypes = {
  task: PropTypes.object.isRequired,
};

export default React.memo(TaskDetailTemplate);
