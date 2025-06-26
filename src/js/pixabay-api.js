import axios from "axios";

export default function getImagesByQuery(query) {
const API_KEY = "51029899-783448441a91da68c2eb1f079";


const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});

return axios.get(`https://pixabay.com/api/`, { params })
        .then(response => response.data)
}

