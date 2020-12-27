import { renderHook, act } from '@testing-library/react-hooks'
import {useApi} from 'test-utils'

const baseUri = process.env.REACT_APP_SERVER_URI

describe('Use api', () => {
    it('should get data', async () => {
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
        const data = {title: "Task saved with use api"}
        let saveRequest;
        act(() => {
            saveRequest = renderHook(() => useApi(baseUri, "POST", data))
        })
        await saveRequest.waitForNextUpdate()
        act(() => {
            expect(saveRequest.result.current.data.title).toEqual(data.title)
            expect(saveRequest.result.current.error).toEqual('')
        })


        // remove request
        const id = saveRequest.result.current.data._id
        let removeRequest;
        act(() => {
            removeRequest = renderHook(() => useApi(baseUri+"/"+id, "PUT", data))
        })
        await removeRequest.waitForNextUpdate()
        act(() => {
            expect(removeRequest.result.current.data.title).toEqual(data.title)
            expect(removeRequest.result.current.error).toEqual('')
        })
    });

    it('should update task', async () => {
        const id = "5fe126dc873e427dac582207"
        const data = {title: "Task update with use api"}
        const {result, waitForNextUpdate} = renderHook(() => useApi(baseUri+"/"+id, "PUT", data))
        await waitForNextUpdate()
        act(() => {
            expect(result.current.data.title).toEqual(data.title)
            expect(result.current.error).toEqual('')
        })
    });
});