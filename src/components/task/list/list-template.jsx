import React from "react";
import TaskDetail from "../detail/detail-container";
import PropTypes from "prop-types";

const TaskListTemplate = (props) => {
  const { tasks } = props;

  return (
    <>
      <h1 data-testid="tasks-list-title" className="mt-4 text-muted text-center">Tasks list</h1>
      {tasks.length > 0 ? (
        tasks.map((taskId , index) => (
          <TaskDetail
            className="task-item"
            taskId={taskId}
            key={index}
          />
        ))
      ) : (
        <p className="text-center text-muted" data-testid="task-empty-list-message">Empty list</p>
      )}
    </>
  );
};

TaskListTemplate.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default React.memo(TaskListTemplate);
