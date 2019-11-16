import { put, call, takeLatest } from "redux-saga/effects";
import { BASE_URL, APIPOST_CLIENTDATA } from "../props";
import axios from "axios";
import { POST_CLIENTDATA, CLIENTDATA } from "../reducers/clients-reducer";
import GM1 from "../containers/assets/gm1.jpg";
import GM2 from "../containers/assets/gm2.jpg";
import GM3 from "../containers/assets/gm3.jpg";
import GM4 from "../containers/assets/gm4.jpg";
import GM5 from "../containers/assets/gm5.jpg";
import GM6 from "../containers/assets/gm6.jpg";

export const api = axios.create({
  timeout: 10000,
  baseURL: BASE_URL
});

api.interceptors.request.use(request => {
  console.log("Starting Request", request);
  return request;
});

// POST REQUEST
const postClientData = dummy => api.post(APIPOST_CLIENTDATA, dummy, authHeader);

const authHeader = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer dummytoken`
  }
};

const changeFormat = data => {
  // [27, "Ah Choo", "F", "Yes"]
  const format = [];
  // { name: "Ah Choo", gender: "F", priority: "Yes", img: GM1 },
  let imgIndex = 0;
  const img = [GM1, GM2, GM3, GM4, GM5, GM6];
  data.forEach(item => {
    format.push({
      name: item[1],
      gender: item[2] === "F" ? "Female" : "Male",
      priority: item[3],
      img: img[imgIndex]
    });
    imgIndex = imgIndex === 5 ? 0 : ++imgIndex;
  });
  return format;
};
function* asyncPostClientData(action) {
  let errMsg = "";
  try {
    const response = yield call(
      postClientData,
      { date_filter: "" }, //dummy date filter to post
      authHeader
    );
    if (response) {
      console.log("Getting response: ", response);
      const { data } = response;
      if (data) {
        yield put({ type: CLIENTDATA, payload: changeFormat(data) });
      }
    }
  } catch (e) {
    errMsg = e.message;
  } finally {
    console.log(errMsg);
  }
}

export default takeLatest(POST_CLIENTDATA, asyncPostClientData);
