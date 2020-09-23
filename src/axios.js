import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-980b8.cloudfunctions.net/api",
  // http://localhost:5001/clone-980b8/us-central1/api,
  // The API (cloud function) URL
});

export default instance;

// https://us-central1-clone-980b8.cloudfunctions.net/api

// http://localhost:5001/clone-980b8/us-central1/api
