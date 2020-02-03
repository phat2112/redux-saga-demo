// import { takeLatest, put, call } from 'redux-saga/effects'
// import {USER} from "./constant";
// import {getDataUsers} from '../../Component/api'
// import {showLoading, hideLoading} from '../../Stores/Loading/Actions'
// import { setUsers, setError} from '../../Stores/User/Actions'
//
// function* handleGetUser({ page }) {
// 	console.log('handleGetUser')
// 	try{
// 		yield put(showLoading())
// 		const getPageUser = yield call(getDataUsers, page)
// 		console.log('getPageUser', getPageUser)
// 		yield put(setUsers(getPageUser))
// 		yield put(hideLoading())
// 	}
// 	catch(error) {
// 		yield put(setError(error.toString()))
// 	}
// }
// export default function* watcher() {
// 	yield takeLatest( USER.LOAD, handleGetUser)
// }

import { takeEvery, call, put, takeLatest } from 'redux-saga/effects'
import { USER } from "../User/constant";
import {getDataUsers} from '../../Component/api'
import { setUsers, setError } from "../User/Actions";
import { showLoading, hideLoading } from '../Loading/Actions'

function* handleUserLoad({ page }) {
	try {
		console.log('handleUsersLoad')
		yield put(showLoading())
		const resp = yield call(getDataUsers, page)
		console.log('images', resp);
		yield put(setUsers(resp))
		yield put(hideLoading())
	} catch (error) {
		console.log('error', error);
		yield put(setError(error.toString()))
	}
}

export default function* watcher() {
	yield takeLatest(USER.LOAD, handleUserLoad)
}
