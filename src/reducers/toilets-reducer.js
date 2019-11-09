export const TOILET1DATA = "[TOILET1DATA]";
export const TOILET2DATA = "[TOILET2DATA]";
export const TOILET3DATA = "[TOILET3DATA]";

// POST to API
export const POST_TOILETSDATE = "[POST_TOILETSDATE]";
// end

export const postToiletsDate = updateDate => ({
  type: POST_TOILETSDATE,
  updateDate
});

export default function(
  state = {
    getErrMsg: null,
    toilet1Data: null,
    toilet2Data: null,
    toilet3Data: null
  },
  action
) {
  switch (action.type) {
    case TOILET1DATA:
      return {
        ...state,
        toilet1Data: action.payload
      };
    case TOILET2DATA:
      return {
        ...state,
        toilet2Data: action.payload
      };
    case TOILET3DATA:
      return {
        ...state,
        toilet3Data: action.payload
      };
    default:
      return state;
  }
}
