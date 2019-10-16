import { put, call, takeLatest } from "redux-saga/effects";
import { GET_QUEUEDATA, QUEUEDATA, GET_ERROR } from "../reducers/queue-reducer";
import { BASE_URL, APIGET_QUEUEDATA } from "../props";
import axios from "axios";

export const api = axios.create({
  timeout: 10000,
  baseURL: BASE_URL
});

api.interceptors.request.use(request => {
  console.log("Starting Request", request);
  return request;
});

// GET REQUEST
const getQueueData = authHeader => api.get(APIGET_QUEUEDATA, authHeader);

function* asyncGetQueueData() {
  let errMsg;
  try {
    const authHeader = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer dummytoken`
      }
    };
    const response = yield call(getQueueData, authHeader);
    if (response) {
      const { queueData, errorMsg } = response.data;
      errMsg = errorMsg;
      if (queueData) {
        yield put({ type: QUEUEDATA, payload: queueData });
      } else {
        errMsg = "Error: Request failed with status code 404";
      }
    }
  } catch (e) {
    errMsg = e.message;
  } finally {
    yield put({ type: GET_ERROR, payload: errMsg });
  }
}

export const getQueueDataSaga = takeLatest(GET_QUEUEDATA, asyncGetQueueData);
