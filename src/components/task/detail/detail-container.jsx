import React from "react";
import { useSelector } from "react-redux";
import TaskDetailTemplate from "./detail-tamplate";

const TaskDetailCotainer = ({ taskId }) => {
  let task = useSelector(state => state.tasks.find(task => task.taskId === taskId))
  const handleRemoveTask = () => {};

  return (
    <>
      <TaskDetailTemplate task={task} onRemoveTask={handleRemoveTask} />
    </>
  );
};

export default React.memo(TaskDetailCotainer);
