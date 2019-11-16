import { all } from "redux-saga/effects";
import { getQueueDataSaga, getOccupancyDataSaga } from "./led-saga";
import postToiletsDateSaga from "./toilets-saga";
import postClientDataSaga from "./clients-saga";
import postClientQueueDataSaga from "./clients-queue-saga";

export default function* rootSaga() {
  yield all([
    getQueueDataSaga,
    getOccupancyDataSaga,
    postToiletsDateSaga,
    postClientDataSaga,
    postClientQueueDataSaga
  ]);
}
