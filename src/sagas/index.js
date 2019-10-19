import { all } from "redux-saga/effects";
import { getQueueDataSaga, getOccupancyDataSaga } from "./queue-saga";

export default function* rootSaga() {
  yield all([getQueueDataSaga, getOccupancyDataSaga]);
}
