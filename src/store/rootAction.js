import { all, fork } from "redux-saga/effects";

import userSagas from "./Users/actions";

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function* rootSagas() {
    yield all([
        ...forkList(userSagas)
    ]);
}
