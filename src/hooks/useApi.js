/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

import axios from 'axios'
const useApi = ({uri, method, body={}, headers={'Content-Type':'applicaction/json'}}) => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')

    const get = async () => {
       try {
        const {data} = await axios.get(uri)
        console.log("--->", data);
        setData(data)
       } catch (error) {
           setError(error.message)
       }
    }

    const post = async () => {
        try {
            const {data} = await axios.post(uri, body, {headers}) 
            setData(data)
        } catch (error) {
            setError(error.message)
        }
    }

    const put = async () => {
        try {
            const {data} = await axios.put(uri, body, {headers})
            setData(data)
        } catch (error) {
            setError(error.message)
        }
    }

    const remove = async () => {
        try {
            const {data} = await axios.delete(uri)
        setData(data)
        } catch (error) {
            setError(error.message)
        }
    } 

    useEffect(() => {
        setError("")
        if(method === "GET") get()
        else if (method === "POST") post();
        else if (method === "PUT") put();
        else if (method === "DELETE") remove();
    })

    return {error, data}
}

export default useApi