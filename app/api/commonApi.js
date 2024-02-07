import axios from "axios";
const baseURL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "ef433584camsh231b7d3cd29820cp1bda8djsn70347d8af599",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
export const commonApi = async (parameter) => {
  try {
    const response = await axios.get(`${baseURL}/${parameter}`,options);
    return response;
  } catch (error) {
    return error;
  }
};
