import React, { useState } from "react";
import PropTypes from "prop-types";

const TaskDetailTemplate = (props) => {
  const { task, onRemoveTask, onUpdateTask } = props;
  const [title, setTitle] = useState(task.title);
  const [updating, setUpdate] = useState(false);

  return (
    <div className="card my-2 mx-2">
      <div className="card-body">
        <div className="d-flex ">
          {!updating && (
            <div data-testid="mode-add">
              <span>{task._id}</span>
              <span>{`: ${task.title}`}</span>
            </div>
          )}
          {updating && (
            <div data-testid="mode-update">
              <textarea 
                cols="60"
                width="100%"
                data-testid="title-to-edit"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="
                Write..."
              >
              </textarea>
              <div className="mt-2">
                <button
                  data-testid="btn-update-task"
                  className="btn btn-sm btn-success mx-2"
                  onClick={() => {onUpdateTask(title); setUpdate(false)}}
                >
                  Update
                </button>
                <button
                  data-testid="btn-canle-update-task mx-2"
                  className="btn btn-sm btn-default mx-2"
                  onClick={() => setUpdate(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          <div className="ml-auto">
            <button
              data-testid="btn-delete-task"
              className="btn btn-sm btn-danger mx-2"
              onClick={onRemoveTask}
            >
              Delete
            </button>
            {!updating && (
              <button
                data-testid="btn-edit-task"
                className="btn btn-sm btn-warning mx-2"
                onClick={() => setUpdate(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

TaskDetailTemplate.propTypes = {
  task: PropTypes.object.isRequired,
};

export default React.memo(TaskDetailTemplate);
