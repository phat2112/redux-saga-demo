import {takeEvery, call, put, takeLatest} from 'redux-saga/effects'
import {USERS} from "../User/constant";
import {getDataUsers} from "../../Component/api";
import {setUsers, setError} from "../User/Action";
import {showLoading, hideLoading} from '../../Stores/Loading/Actions'

// const getPage = state => state.nextPage

function* handleUsersLoad({page}) {
	try {
		console.log('handleUsersLoad')
		yield put(showLoading())
		const images = yield call(getDataUsers, page)
		console.log('images', images);
		yield put(setUsers(images))
		yield put(hideLoading())
	} catch (error) {
		console.log('error', error);
		yield put(setError(error.toString()))
	}
}

export default function* watcher() {
	yield takeLatest(USERS.LOAD, handleUsersLoad)
}

