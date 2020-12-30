import { fetchTasks, store, addTask, updateTask, removeTask, mockTasks } from "test-utils";
import { unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";

jest.mock("axios");
const data = mockTasks
const mockResponseOptions = {status:200, statusText:"OK"}

afterEach(() => store.clearActions());

describe("Task thunks", () => {
  it("should get tasks when fetch tasks", async () => {
    const resp = {data, ...mockResponseOptions};
    axios.get.mockResolvedValue(resp);

    const tasks = await store.dispatch(fetchTasks()).then(unwrapResult);
    const actualActions = store.getActions().map((action) => action.type);
    const expectActions = [fetchTasks.pending.type, fetchTasks.fulfilled.type];
    expect(actualActions).toEqual(expectActions);
    expect(tasks instanceof Array).toBeTruthy();
  });

  it("should add and remove task", async () => {
    const dataToSaveAndRemove = data[0]
    axios.post.mockResolvedValue({data: dataToSaveAndRemove, ...mockResponseOptions});
    
    const task = await store.dispatch(addTask(dataToSaveAndRemove)).then(unwrapResult);
    const actualActions = store.getActions().map((action) => action.type);
    const expectActions = [addTask.pending.type, addTask.fulfilled.type];
    expect(actualActions).toEqual(expectActions);
    expect(task.title).toEqual(dataToSaveAndRemove.title);
    store.clearActions();

    axios.delete.mockResolvedValue({ data: dataToSaveAndRemove, ...mockResponseOptions});
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
    expect(taskremoved.title).toEqual(dataToSaveAndRemove.title);
  });

  it("should update a task", async () => {
    const dataToUpdated = data[1]
    axios.put.mockResolvedValue({ data: dataToUpdated, ...mockResponseOptions});

    const task = await store
      .dispatch(
        updateTask({ id: "5fe12b3d2079267dac5ced68", task: dataToUpdated })
      )
      .then(unwrapResult);
    const actualActions = store.getActions().map((action) => action.type);
    const expectActions = [updateTask.pending.type, updateTask.fulfilled.type];
    expect(actualActions).toEqual(expectActions);
    expect(task.title).toEqual(dataToUpdated.title);
  });
});
