import {list, add, remove, update, cleanup, mockTasks} from 'test-utils'
import axios from "axios";

jest.mock("axios");
const mockResponseOptions = {status:200, statusText:"OK"}
afterEach(() => cleanup());

describe('Task api service', () => {
    it('should get tasks', async () => {
        const resp = {data: mockTasks, ...mockResponseOptions};
        axios.get.mockResolvedValue(resp);
        const response = await list()
        expect(response.statusText).toEqual("OK")
        expect(response.status).toEqual(200)
        expect(response.data).toBeDefined()
    });

    it('should add new task and remove', async () => {
        axios.post.mockResolvedValue({data: {}, ...mockResponseOptions});
        const task = {title: "Task adde with test service"}
        const response = await add(task)
        expect(response.statusText).toEqual("OK")
        expect(response.status).toEqual(200)
        expect(response.data).toBeDefined()

        axios.delete.mockResolvedValue({ data: mockTasks[0], ...mockResponseOptions});
        const response_removed = await remove(response.data._id)
        expect(response_removed.statusText).toEqual("OK")
        expect(response_removed.status).toEqual(200)
        expect(response_removed.data).toBeDefined()
    });

    it('should update a task', async () => {
        axios.put.mockResolvedValue({ data: mockTasks[0], ...mockResponseOptions});
        const id = "5fe12b66bee22b7daced1a1b"
        const task = {title: "Task updated with test service"}
        const response = await update(id, task)
        expect(response.statusText).toEqual("OK")
        expect(response.status).toEqual(200)
        expect(response.data).toBeDefined()
    });

});