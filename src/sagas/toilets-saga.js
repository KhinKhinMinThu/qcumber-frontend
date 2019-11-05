import { call, takeLatest } from "redux-saga/effects";
import { POST_TOILETSDATE, TOILETSDATA } from "../reducers/toilets-reducer";
import { BASE_URL, APIPOST_TOILETSDATE } from "../props";
import axios from "axios";

export const api = axios.create({
  timeout: 10000,
  baseURL: BASE_URL
});

api.interceptors.request.use(request => {
  console.log("Starting Request", request);
  return request;
});

// POST REQUEST
const postToiletsDate = (updateDate, authHeader) =>
  api.post(APIPOST_TOILETSDATE, updateDate, authHeader);

const authHeader = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer dummytoken`
  }
};
function* asyncPostToiletsDate(action) {
  let errMsg = "";
  try {
    const response = yield call(postToiletsDate, action.updateDate, authHeader);
    if (response) {
      console.log("Getting response: ", response);
      const { data } = response;
      if (data) {
        // yield put({ type: QUEUEDATA, payload: data });
      }
    }
  } catch (e) {
    errMsg = e.message;
  } finally {
    console.log(errMsg);
  }
}

export default takeLatest(POST_TOILETSDATE, asyncPostToiletsDate);
