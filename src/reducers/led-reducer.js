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
    queueData: null,
    // [
    //   {
    //     1: { name: "Dummy Male Q", waitingtime: "1" },
    //     2: { name: "Dummy Male Q", waitingtime: "1" },
    //     3: { name: "Dummy Male Q", waitingtime: "1" },
    //     4: { name: "Dummy Male Q", waitingtime: "1" },
    //     5: { name: "Dummy Male Q", waitingtime: "1" },
    //     6: { name: "Dummy Male Q", waitingtime: "1" },
    //     7: { name: "Dummy Male Q", waitingtime: "1" },
    //     8: { name: "Dummy Male Q", waitingtime: "1" },
    //     9: { name: "Dummy Male Q", waitingtime: "1" },
    //     10: { name: "Dummy Male Q", waitingtime: "1" }
    //   }, //male toilet
    //   { 1: { name: "Dummy Female Q", waitingtime: "2" } } //female toilet
    // ],
    occupancyData: null //{ toilet1: "0", toilet2: "1" } //0: male, 1 onwards: female
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
