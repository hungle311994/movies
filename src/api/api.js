import Axios from "axios";

export const API_KEY = "4a91b757f8bce90b15ad8458b36aedbc";
const axiosClient = Axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
});
export const api = async (method, endpoint, payload) => {
  try {
    const res = await axiosClient(endpoint, { method: method, data: payload });
    return res;
  } catch (error) {
    console.log(error);
  }
};
