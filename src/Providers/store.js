import { createStore, compose, applyMiddleware } from "redux";
import rootsaga from "./rootsaga";
import rootreducer from "./rootreducer";
import createSagaMiddleware from "redux-saga";


const sagamiddleware = createSagaMiddleware()
const middleware = [sagamiddleware]
const enhancer = compose(applyMiddleware(...middleware))
let store = createStore(rootreducer, enhancer)
sagamiddleware.run(rootsaga)

export default store 