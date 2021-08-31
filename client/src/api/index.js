import axios from "axios";

function getPosts() {
  return axios.get(`${process.env.VUE_APP_URL}/members`);
}

function getTree() {
  return axios.get(`${process.env.VUE_APP_URL}/tree`);
}

export { getPosts, getTree };
