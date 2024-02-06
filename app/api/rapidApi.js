import axios from 'axios';

const baseURL = "https://youtube138.p.rapidapi.com"
const options = {
  params: {
    q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key':'c3e37a13a2mshc21222f9bf3d519p1d46c7jsnc8002ac466e7',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchingApi=async(parameter)=>{
    const response = await axios.get(`${baseURL}/${parameter}`,options);
    return response?.data;
}