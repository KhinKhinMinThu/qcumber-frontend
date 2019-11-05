import { all } from "redux-saga/effects";
import { getQueueDataSaga, getOccupancyDataSaga } from "./led-saga";
import postToiletsDateSaga from "./toilets-saga";

export default function* rootSaga() {
  yield all([getQueueDataSaga, getOccupancyDataSaga, postToiletsDateSaga]);
}
