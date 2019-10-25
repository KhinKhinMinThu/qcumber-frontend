import { all } from "redux-saga/effects";
import { getQueueDataSaga, getOccupancyDataSaga } from "./led-saga";

export default function* rootSaga() {
  yield all([getQueueDataSaga, getOccupancyDataSaga]);
}
