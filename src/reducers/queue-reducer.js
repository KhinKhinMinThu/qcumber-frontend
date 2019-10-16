export const GET_QUEUEDATA = "[GET_QUEUEDATA]";
export const GET_ERROR = "[GET_ERROR]";
export const QUEUEDATA = "[QUEUEDATA]";

export const getQueueData = () => ({ type: GET_QUEUEDATA });
export const setQueueData = queueData => ({
  type: QUEUEDATA,
  payload: queueData
});

export default function(
  state = {
    getErrMsg: null,
    queueData: null
  },
  action
) {
  switch (action.type) {
    case QUEUEDATA:
      return {
        ...state,
        queueData: action.payload
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
