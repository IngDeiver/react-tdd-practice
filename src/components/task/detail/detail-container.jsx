import React from "react";
import TaskDetailTemplate from "./detail-tamplate";

const TaskDetailCotainer = ({ taskId }) => {
  const task = {taskId};
  const handleRemoveTask = () => {};

  return (
    <>
      <TaskDetailTemplate task={task} onRemoveTask={handleRemoveTask} />
    </>
  );
};

export default React.memo(TaskDetailCotainer);
