import axios from "axios";

function getPosts() {
  return axios.get(`${process.env.VUE_APP_URL}/members`);
}

function getTree() {
  return axios.get(`${process.env.VUE_APP_URL}/tree`);
}

function getTranslate(params) {
  return axios.get(`${process.env.VUE_APP_URL}/translate`, { params });
}

export { getPosts, getTree, getTranslate };
