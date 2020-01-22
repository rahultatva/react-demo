import { takeLatest, put, call } from "redux-saga/effects";
import { fetchUsers } from "../../services/users";

// Action watcher for FETCH_USERS
function* fetchUsersWatcher() {
    yield takeLatest("FETCH_USERS", fetchUsersHandler);
}

// Action Handler
function* fetchUsersHandler() {
    try {
        const response = yield call(fetchUsers);
        yield put({
            type: 'FETCH_USERS_SUCCESS',
            payload: response.results
        });
    } catch (error) {
        yield put({
            type: 'FETCH_USERS_FAIL',
            payload: []
        });
    }
}

// Export all Action watchers
export default [fetchUsersWatcher];
