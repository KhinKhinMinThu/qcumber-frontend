import { combineReducers } from "redux";
// import { persistReducer } from "redux-persist";
// import localStorage from "redux-persist/lib/storage";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import queueDataReducer from "./queue-reducer";

/**
 * LocalStorage: storage engine for storing redux state
 * autoMergeLevel2: when restoring state during app launch,
 * this will check initial state and overrides it,
 * else it will replace initial state without checking (ignoring possible new entries)
 */
// export const loginPersistConfig = {
//   key: "login",
//   storage: localStorage,
//   stateReconciler: autoMergeLevel2
// };

const rootReducer = combineReducers({
  queueData: queueDataReducer
});

export default rootReducer;
