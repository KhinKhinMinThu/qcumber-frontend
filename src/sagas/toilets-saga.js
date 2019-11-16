import { put, call, takeLatest } from "redux-saga/effects";
import {
  POST_TOILETSDATE,
  TOILET1DATA,
  TOILET2DATA,
  TOILET3DATA
} from "../reducers/toilets-reducer";
import { BASE_URL, APIPOST_TOILETSDATE } from "../props";
import axios from "axios";
import moment from "moment";

export const api = axios.create({
  timeout: 900000,
  baseURL: BASE_URL
});

api.interceptors.request.use(request => {
  console.log("Starting Request", request);
  return request;
});

// POST REQUEST
const postToiletsDate = (updateDate, authHeader) =>
  api.post(APIPOST_TOILETSDATE, { date_filter: updateDate }, authHeader);

const authHeader = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer dummytoken`
  }
};

const filterArray = toilet => {
  let prevItem = toilet[0];
  toilet = toilet.filter((item, index) => {
    if (index > 0) {
      if (item[1] !== prevItem[1]) {
        prevItem = item;
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  });
  return toilet;
};

const sliceArray = toilet => {
  const index = toilet.findIndex(item => item[1] === "1");
  return toilet.slice(index);
};

const extractDuration = toilet => {
  const durationHr = {
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
    "14": 0,
    "15": 0,
    "16": 0,
    "17": 0
  };
  for (var i = 0; i < toilet.length; i += 2) {
    if (i + 1 !== toilet.length) {
      const curTime = toilet[i][2];
      const nxtTime = toilet[i + 1][2];

      // startTime is where toilet becomes occupied: 1
      // endTime is where toilet becomes vacant: 0
      const startTime = moment(curTime, "YYYY-MM-DD hh:mm:ss").add(8, "hour"); // covert UTC to SG Time
      const endTime = moment(nxtTime, "YYYY-MM-DD hh:mm:ss").add(8, "hour"); // covert UTC to SG Time

      const cappedTime = moment(
        moment(startTime).format("YYYY-MM-DD") +
          (startTime.hours() + 1) +
          ":00:00",
        "YYYY-MM-DD hh:mm:ss"
      );

      let duration, start2Cap, cap2End;
      if (startTime.hours() === endTime.hours()) {
        duration = moment.duration(endTime.diff(startTime));
        durationHr[startTime.hours()] += duration.asSeconds();
      } else {
        start2Cap = moment.duration(cappedTime.diff(startTime));
        cap2End = moment.duration(endTime.diff(cappedTime));

        durationHr[startTime.hours()] += start2Cap.asSeconds();
        durationHr[endTime.hours()] += cap2End.asSeconds();
      }
    }
  }
  return durationHr;
};

function* asyncPostToiletsDate(action) {
  let errMsg = "";
  try {
    const response = yield call(postToiletsDate, action.updateDate, authHeader);
    if (response) {
      console.log("Getting response: ", response);
      const { data } = response;
      if (data) {
        const toilet1 = sliceArray(
          filterArray(data.filter(item => item[0] === 1))
        );
        const toilet2 = sliceArray(
          filterArray(data.filter(item => item[0] === 2))
        );
        const toilet3 = sliceArray(
          filterArray(data.filter(item => item[0] === 3))
        );
        console.log(">>>>>>>>>>>>>>>>>>> toilet1", toilet1);
        yield put({ type: TOILET1DATA, payload: extractDuration(toilet1) });
        yield put({ type: TOILET2DATA, payload: extractDuration(toilet2) });
        yield put({ type: TOILET3DATA, payload: extractDuration(toilet3) });
      }
    }
  } catch (e) {
    errMsg = e.message;
  } finally {
    console.log(errMsg);
  }
}

export default takeLatest(POST_TOILETSDATE, asyncPostToiletsDate);
