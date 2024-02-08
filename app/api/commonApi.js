import axios from "axios";
const baseURL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "IN",
  },
  headers: {
    "X-RapidAPI-Key": "fd7de17c6bmsh75ea13187d2124ap19b80djsn0c6ddf5a4d0f",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
export const commonApi = async (parameter,query) => {
  try {
    const response = await axios.get(`${baseURL}/${parameter}`,options);
    return response;
  } catch (error) {
    console.log(error)
    return error;
  }
};
