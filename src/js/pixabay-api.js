import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51029899-783448441a91da68c2eb1f079';

export function fetchImages(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}