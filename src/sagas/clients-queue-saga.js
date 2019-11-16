import { put, call, takeLatest } from "redux-saga/effects";
import { BASE_URL, APIPOST_CLIENTQUEUEDATA } from "../props";
import axios from "axios";
import { POST_CLIENTQUEUEDATA, QUEUEDATA } from "../reducers/clients-reducer";

export const api = axios.create({
  timeout: 10000,
  baseURL: BASE_URL
});

api.interceptors.request.use(request => {
  console.log("Starting Request", request);
  return request;
});

// POST REQUEST
const postClientQueueData = dummy =>
  api.post(APIPOST_CLIENTQUEUEDATA, dummy, authHeader);

const authHeader = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer dummytoken`
  }
};

const changeFormat = data => {
  // ["Liew KH", "2019-11-08 10:52:00", "2019-11-08 10:55:00"],
  const format = [];
  // { name: "Ah Choo", entertime: "2019-11-08 13:08:00", leavetime: "2019-11-08 13:15:00"},
  data.forEach(item => {
    if (item[2]) {
      format.push({
        name: item[0],
        entertime: item[1],
        leavetime: item[2]
      });
    }
  });

  return format.sort((a, b) => (a.name > b.name ? 1 : -1));
};
function* asyncPostClientQueueData(action) {
  let errMsg = "";
  try {
    const response = yield call(
      postClientQueueData,
      { date_filter: "" }, //dummy date filter to post
      authHeader
    );
    if (response) {
      console.log("Getting response: ", response);
      const { data } = response;
      if (data) {
        yield put({ type: QUEUEDATA, payload: changeFormat(data) });
      }
    }
  } catch (e) {
    errMsg = e.message;
  } finally {
    console.log(errMsg);
  }
}

export default takeLatest(POST_CLIENTQUEUEDATA, asyncPostClientQueueData);
