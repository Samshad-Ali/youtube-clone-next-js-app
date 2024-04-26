import axios from "axios";
const baseURL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "IN",
  },
  headers: {
    "X-RapidAPI-Key": "89c66efc1fmsh61218b870f559abp12a84fjsna29e42369fd6",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
export const commonApi = async (parameter) => {
  try {
    const response = await axios.get(`${baseURL}/${parameter}`,options);
    return response;
  } catch (error) {
    console.log(error)
    return error?.response;
  }
};
