import { fetchTasks, store } from "test-utils";
import { unwrapResult } from '@reduxjs/toolkit'

afterEach(() => store.clearActions())

describe("Task thunks", () => {
  it("should get tasks when fetch tasks", async () => {
    const tasks = await store.dispatch(fetchTasks()).then(unwrapResult);
    const actualActions = store.getActions().map((action) => action.type);
    const expectActions = [
      fetchTasks.pending.type,
      fetchTasks.fulfilled.type
    ];
    expect(actualActions).toEqual(expectActions);
    expect(tasks instanceof Array).toBeTruthy()
  });
});
