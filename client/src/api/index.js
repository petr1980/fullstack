import axios from "axios";

function getPosts() {
  axios.get(`${process.env.VUE_APP_URL}/members`);
}

export { getPosts };
