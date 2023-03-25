import Loginreducers from "./reducers/loginreducer";
import { combineReducers } from "redux";

const appreducer = combineReducers({ Loginreducers })
const rootreducer = (state, action) => { return appreducer(state, action) }

export default rootreducer