import axios from "../../axios/axios"


export const getVideos = async({tags, search}) => {

    let queryString = ''

    if(tags.length > 0){
        queryString += tags.map(tag => `tags_like=${tag}`).join("&")
    }


    if (search !== "") {
        queryString += `&q=${search}`
    }
    
    const response = await axios.get(`/videos/?${queryString}`);
    const data = response.data

    return data
}