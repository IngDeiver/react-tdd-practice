import React from "react";
import TaskListTemplate from "./list-template";

const TasksListContainer = () => {
  const tasks = []
  return (
    <>
      <TaskListTemplate
        tasks={tasks}
      />
    </>
  );
};

export default React.memo(TasksListContainer);
