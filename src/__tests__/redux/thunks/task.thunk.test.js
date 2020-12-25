import { fetchTasks, store, addTask, updateTask, removeTask } from "test-utils";
import { unwrapResult } from "@reduxjs/toolkit";

afterEach(() => store.clearActions());

describe("Task thunks", () => {
  it("should get tasks when fetch tasks", async () => {
    const tasks = await store.dispatch(fetchTasks()).then(unwrapResult);
    const actualActions = store.getActions().map((action) => action.type);
    const expectActions = [fetchTasks.pending.type, fetchTasks.fulfilled.type];
    expect(actualActions).toEqual(expectActions);
    expect(tasks instanceof Array).toBeTruthy();
  });

  it("should add and remove task", async () => {
    const newTask = { title: "Task saved with test add thunk" };
    const task = await store.dispatch(addTask(newTask)).then(unwrapResult);
    const actualActions = store.getActions().map((action) => action.type);
    const expectActions = [addTask.pending.type, addTask.fulfilled.type];
    expect(actualActions).toEqual(expectActions);
    expect(task.title).toEqual(newTask.title);
    store.clearActions();

    const taskremoved = await store
      .dispatch(removeTask(task._id))
      .then(unwrapResult);
    const actualActions_removed = store
      .getActions()
      .map((action) => action.type);
    const expectActions_remove = [
      removeTask.pending.type,
      removeTask.fulfilled.type,
    ];
    expect(actualActions_removed).toEqual(expectActions_remove);
    expect(taskremoved.title).toEqual(newTask.title);
  });

  it("should update a task", async () => {
    const body = { title: "Task update with test update thunk" };
    const task = await store
      .dispatch(
        updateTask({ id: "5fe12b3d2079267dac5ced68", task: body })
      )
      .then(unwrapResult);
    const actualActions = store.getActions().map((action) => action.type);
    const expectActions = [updateTask.pending.type, updateTask.fulfilled.type];
    expect(actualActions).toEqual(expectActions);
    expect(task.title).toEqual(body.title);
  });
});
