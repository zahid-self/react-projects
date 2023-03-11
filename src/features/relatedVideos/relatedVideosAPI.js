import axios from "../../axios/axios"


export const getRelatedVideos = async({tags, id}) => {
    let limit = 5;
    let queryString = tags.length > 0 ? tags.map(tag => `tags_like=${tag}`).join("&") + `&id_ne=${id}&_limit=${limit}` : `&id_ne=${id}&_limit=${limit}`;
    const response = await axios.get(`/videos?${queryString}`);
    const data = response.data

    return data
}