import axios from "axios";
const baseURL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "IN",
  },
  headers: {
    "X-RapidAPI-Key": "0e4d9defc0msh5de9864bb3f11edp14d16bjsnce239b040f81",
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
