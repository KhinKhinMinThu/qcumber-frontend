import { all } from "redux-saga/effects";
import { getQueueDataSaga } from "./queue-saga";

export default function* rootSaga() {
  yield all([getQueueDataSaga]);
}
