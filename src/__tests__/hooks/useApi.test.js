import { renderHook, act } from '@testing-library/react-hooks'
import {useApi} from 'test-utils'

const baseUri = process.env.REACT_APP_SERVER_URI

describe('Hooks', () => {
    it('should get data with useApi hook', () => {
        const {result} = renderHook(() => useApi(baseUri, "GET"))
        console.log(result.current);
    });
});