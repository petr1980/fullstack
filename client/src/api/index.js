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

function registrationLingvolive() {
  return axios.get(`${process.env.VUE_APP_URL}/lingvolive/api/key`);
}

function getTranslateLingvolive({ request }) {
  return axios.post(
    `${process.env.VUE_APP_URL}/lingvolive/api/translate`,
    request
  );
}

export {
  getPosts,
  getTree,
  getTranslate,
  registrationLingvolive,
  getTranslateLingvolive,
};
