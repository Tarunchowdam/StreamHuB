import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '773f867f5bmshd02126c02c530e6p10cd89jsnd958eb411bb8',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }
