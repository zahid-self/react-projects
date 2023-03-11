import axios from "../../axios/axios"


export const getVideo = async(id) => {
    const response = await axios.get(`/videos/${id}`);
    const data = response.data
    return data
}