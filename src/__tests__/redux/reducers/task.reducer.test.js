import { TaskReducer, fetchTasks } from "test-utils";

describe("Task reducer", () => {
  it("should return the state with a tasks list when call fetch thunk", () => {
    const testInitialState = [];
    const testFecthData = [{ taskId: "id", title: "Fake title" }]
    const tasks = TaskReducer(testInitialState, {
      type: fetchTasks.fulfilled.type,
      payload: testFecthData,
    });

    expect(tasks).toEqual(testFecthData);
  });
});
