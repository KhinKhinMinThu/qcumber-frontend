export const TOILETSDATA = "[TOILETSDATA]";

// POST to API
export const POST_TOILETSDATE = "[POST_TOILETSDATE]";
// end

export const setToiletsData = toiletsData => ({
  type: TOILETSDATA,
  payload: toiletsData
});
export const postToiletsDate = updateDate => ({
  type: POST_TOILETSDATE,
  updateDate
});

export default function(
  state = {
    getErrMsg: null,
    toiletsData: null
  },
  action
) {
  switch (action.type) {
    case TOILETSDATA:
      return {
        ...state,
        toiletsData: action.payload
      };
    default:
      return state;
  }
}
