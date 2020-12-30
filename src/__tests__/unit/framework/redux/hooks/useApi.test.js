import { renderHook, act } from '@testing-library/react-hooks'
import {useApi, mockTasks} from 'test-utils'
import axios from "axios";

jest.mock("axios");
const baseUri = process.env.REACT_APP_SERVER_URI
const mockResponseOptions = {status:200, statusText:"OK"}
const data = mockTasks

describe('Use api', () => {
    it('should get data', async () => {
        const resp = {data, ...mockResponseOptions};
        axios.get.mockResolvedValue(resp);
        let getRequest
        act(() => {
            getRequest = renderHook(() => useApi(baseUri, "GET"))
        })
        await getRequest.waitForNextUpdate()
        act(()=> {
            expect(getRequest.result.current.data.length).toBeGreaterThan(0)
            expect(getRequest.result.current.error).toEqual('')
        })
    });

    it('should save and remove task', async () => {
        // save request
        const dataToSaveAndRemove = data[0]
        axios.post.mockResolvedValue({data: dataToSaveAndRemove, ...mockResponseOptions});
        let saveRequest;
        act(() => {
            saveRequest = renderHook(() => useApi(baseUri, "POST", dataToSaveAndRemove))
        })
        await saveRequest.waitForNextUpdate()
        act(() => {
            expect(saveRequest.result.current.data.title).toEqual(dataToSaveAndRemove.title)
            expect(saveRequest.result.current.error).toEqual('')
        })


        // remove request
        axios.delete.mockResolvedValue({ data: dataToSaveAndRemove, ...mockResponseOptions});
        let removeRequest;
        act(() => {
            removeRequest = renderHook(() => useApi(baseUri+"/"+dataToSaveAndRemove._id, "DELETE", dataToSaveAndRemove))
        })
        await removeRequest.waitForNextUpdate()
        act(() => {
            expect(removeRequest.result.current.data.title).toEqual(dataToSaveAndRemove.title)
            expect(removeRequest.result.current.error).toEqual('')
        })
    });

    it('should update task', async () => {
        const dataToUpdated = data[1]
        axios.put.mockResolvedValue({ data: dataToUpdated, ...mockResponseOptions});
        const {result, waitForNextUpdate} = renderHook(() => useApi(baseUri+"/"+dataToUpdated._id, "PUT", dataToUpdated))
        await waitForNextUpdate()
        act(() => {
            expect(result.current.data.title).toEqual(dataToUpdated.title)
            expect(result.current.error).toEqual('')
        })
    });
});