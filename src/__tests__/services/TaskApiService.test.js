import {list} from 'test-utils'

describe('Task api service', () => {
    it('should get tasks with 200 status', async () => {
        const response = await list()
        expect(response.statusText).toEqual("OK")
        expect(response.status).toEqual(200)
        expect(response.data).toBeDefined()
    });
});