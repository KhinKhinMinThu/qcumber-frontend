import { put, call, takeLatest } from "redux-saga/effects";
import {
  GET_QUEUEDATA,
  QUEUEDATA,
  OCCUPANCYDATA,
  GET_OCCUPANCYDATA
} from "../reducers/led-reducer";
import { BASE_URL, APIGET_QUEUEDATA, APIGET_OCCUPANCYDATA } from "../props";
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
const getOccupancyData = authHeader =>
  api.get(APIGET_OCCUPANCYDATA, authHeader);

const authHeader = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer dummytoken`
  }
};
function* asyncGetQueueData() {
  let errMsg = "";
  try {
    const response = yield call(getQueueData, authHeader);
    if (response) {
      console.log("Getting response: ", response);
      const { data } = response;
      if (data) {
        yield put({ type: QUEUEDATA, payload: data });
      }
    }
  } catch (e) {
    errMsg = e.message;
  } finally {
    console.log(errMsg);
  }
}

function* asyncGetOccupancyData() {
  let errMsg = "";
  try {
    const response = yield call(getOccupancyData, authHeader);
    if (response) {
      console.log("Getting response: ", response);
      const { data } = response;
      if (data) {
        yield put({ type: OCCUPANCYDATA, payload: data });
      }
    }
  } catch (e) {
    errMsg = e.message;
  } finally {
    console.log(errMsg);
  }
}
export const getQueueDataSaga = takeLatest(GET_QUEUEDATA, asyncGetQueueData);
export const getOccupancyDataSaga = takeLatest(
  GET_OCCUPANCYDATA,
  asyncGetOccupancyData
);
