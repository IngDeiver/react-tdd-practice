import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskDetailTemplate from "./detail-tamplate";
import { removeTask, updateTask } from "../../../redux/thunks/task.thunk";

const TaskDetailCotainer = ({ taskId }) => {
  let task = useSelector((state) =>
    state.tasks.find((task) => task._id === taskId)
  );
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTask(taskId));
  };

  const handleUpdateTask = (title) => {
    dispatch(updateTask({ id: taskId, task:{title} }));
  };

  return (
    <>
      <TaskDetailTemplate
        task={task}
        onRemoveTask={handleRemoveTask}
        onUpdateTask={handleUpdateTask}
      />
    </>
  );
};

export default React.memo(TaskDetailCotainer);
