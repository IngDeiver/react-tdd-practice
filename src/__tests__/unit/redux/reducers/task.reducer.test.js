import { taskReducer, fetchTasks, addTask, removeTask, updateTask } from "test-utils";

describe("Task reducer", () => {
  it("should return the state with a tasks list", () => {
    const testInitialState = [];
    const testFecthData = [{ taskId: "id", title: "Fake title" }]
    const tasks = taskReducer(testInitialState, {
      type: fetchTasks.fulfilled.type,
      payload: testFecthData,
    });

    expect(tasks).toEqual(testFecthData);
  });

  it("should add task", () => {
    const testInitialState = [{_id:"id", title:"Title"}];
    const newTask = {_id:"id2", title:"Title 2"}
    const tasks = taskReducer(testInitialState, {
      type: addTask.fulfilled.type,
      payload: newTask,
    });

    expect(tasks).toHaveLength(2)
    expect(tasks[1].title).toEqual(newTask.title)
  });

  it("should remove task", () => {
    const testInitialState = [{_id:"id", title:"Title"}];
    const tasks = taskReducer(testInitialState, {
      type: removeTask.fulfilled.type,
      payload: {_id: testInitialState[0]._id},
    });

    expect(tasks).toHaveLength(0)
  });

  it("should update task", () => {
    const testInitialState = [{_id:"id", title:"Title"}];
    const newTitle =  "Title update with reducer test"
    const tasks = taskReducer(testInitialState, {
      type: updateTask.fulfilled.type,
      payload: {_id: testInitialState[0]._id, title: newTitle},
    });
    expect(tasks.length).toBeGreaterThan(0)
    expect(tasks[0].title).toEqual(newTitle)
  });
});
