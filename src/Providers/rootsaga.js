import { all, fork } from '@redux-saga/core/effects';
import * as loginsaga from '../Providers/sagas/loginsaga';


export default function* rootsaga() {
    yield all([...Object.values(loginsaga)].map(fork))
}