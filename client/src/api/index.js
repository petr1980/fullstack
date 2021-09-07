import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_URL,
  headers: {
    accept: "application/json",
  },
});

//function getPosts() {
//  return axios.get(`${process.env.VUE_APP_URL}/members`);
//}

export default instance;
