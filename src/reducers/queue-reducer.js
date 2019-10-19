export const GET_QUEUEDATA = "[GET_QUEUEDATA]";
export const GET_OCCUPANCYDATA = "[GET_OCCUPANCYDATA]";
export const GET_ERROR = "[GET_ERROR]";
export const QUEUEDATA = "[QUEUEDATA]";
export const OCCUPANCYDATA = "[OCCUPANCYDATA]";

export const getQueueData = () => ({ type: GET_QUEUEDATA });
export const setQueueData = queueData => ({
  type: QUEUEDATA,
  payload: queueData
});
export const getOccupancyData = () => ({ type: GET_OCCUPANCYDATA });
export const setOccpancyData = occupancyData => ({
  type: OCCUPANCYDATA,
  payload: occupancyData
});

export default function(
  state = {
    getErrMsg: null,
    queueData: [
      { 1: { name: "k", waitingtime: "2" } },
      { 1: { name: "k", waitingtime: "2" } }
    ],
    occupancyData: [{ toilet1: "0", toilet2: "1" }]
  },
  action
) {
  switch (action.type) {
    case QUEUEDATA:
      return {
        ...state,
        queueData: action.payload
      };
    case OCCUPANCYDATA:
      return {
        ...state,
        occupancyData: action.payload
      };
    case GET_ERROR:
      return {
        ...state,
        getErrMsg: action.payload
      };
    default:
      return state;
  }
}
