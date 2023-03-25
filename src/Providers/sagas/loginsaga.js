import {
  call,
  put,
  fork,
  takeEvery,
  takeLatest,
  all,
  select,
} from "redux-saga/effects";

import { Login, changenavigate, savelogin } from "../actions/loginactions";
import { loginAuth } from "../../services/loginServices";
import * as navigationService from '../../services/navigationservice';
import { dateOfLastLogin } from "../../Constants/assets";

function* changeNavigation(data) {
  let to = data.to;
  try {
    yield navigationService.navigate(to);
  } catch (error) { }
}

export function* change_navigation() {
  yield takeLatest(changenavigate.CHANGENAVIGATION, changeNavigation);
}


export function* loinsaga() {
  yield takeLatest(Login.REQUEST, loginapisaga)
}

function* loginapisaga(payload) {
  const state = yield select();
  console.log(payload.password)
  console.log(payload)
  const req = {
    password: payload.payload.password,
    username: payload.payload.username

  }

  let from = 'Login'
  let to = 'HomeLabels'
  try {
    const response = yield call(loginAuth, req)
    console.log(response)
    if (
      response !== null
    ) {
      yield put({ type: Login.SUCCESS, response })
      // yield call (navigationservice.navigate,'FirstPage')
      const data = { userDetails: response, isLoggedIn: true, currentTime: dateOfLastLogin }
      console.log('akhfgkjahfdkajhf', data)
      yield put({ type: changenavigate.CHANGENAVIGATION, from, to })
      yield put({ type: savelogin.SAVELOGIN, data })
    }
    else {
      yield put({ type: Login.FAILED })
    }


  } catch (error) {
    yield put({ type: Login.FAILED })

  }
}
