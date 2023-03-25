
import { Login, savelogin, removelogin } from "../actions/loginactions";

const initialState = {
  isLoading: false,
  currentTime: '',
  isLoggedIn: false,
  userDetails: null,
};

function Loginreducers(state = initialState, action) {



  switch (action.type) {


    case removelogin.REMOVELOGIN:

      return {
        ...state,
        userDetails: {},
        isLoggedIn: false,
        currentTime: ''

      }
    case savelogin.SAVELOGIN:
      return {
        ...state,
        ...action?.data,

      }

    case Login.REQUEST:

      return {
        ...state,
        isLoggedIn: false,
        userDetails: null,
        isLoading: true
      };
    case Login.SUCCESS:
      return {
        ...state,
        isLoading: false,
        userDetails: action.response,
        isLoggedIn: true
      };

    case Login.FAILED:
      return {
        ...state,

        sLoggedIn: false,
        userDetails: null,
        isLoading: false

      };
    default:
      return state;
  }
}

export default Loginreducers;