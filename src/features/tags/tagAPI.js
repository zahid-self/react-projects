import axios from "../../axios/axios"


export const getTags = async() => {
    const response = await axios.get('/tags');
    const data = response.data
    return data
}