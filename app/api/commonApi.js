import axios from "axios";
const baseURL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "IN",
  },
  headers: {
    "X-RapidAPI-Key": "40aeab36a2msh44f9639e31e8655p10d9bcjsn18cce0b748a1",
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
