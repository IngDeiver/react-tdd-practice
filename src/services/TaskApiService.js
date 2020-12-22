import axios from 'axios'
const baseUri = process.env.REACT_APP_SERVER_URI

const list = () => {
    return axios.get(baseUri)
}
export {
    list
}