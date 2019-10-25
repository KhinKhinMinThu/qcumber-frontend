export const LOGINDATA = "[LOGIN_DATA] LOGINDATA";
export const LOGOUT = "[LOGIN_DATA] LOGOUT";

export const setLoginData = loginData => ({
  type: LOGINDATA,
  payload: loginData
});
export const setLogout = () => ({ type: LOGOUT });

export const initialLoginState = {
  isLoggedIn: false
};
export default function(state = { ...initialLoginState }, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...initialLoginState
      };
    case LOGINDATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
