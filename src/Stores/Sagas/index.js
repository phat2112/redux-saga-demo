import {all} from 'redux-saga/effects'
import user from'../User/Saga'

export default function* rootSaga() {
	yield all([
		user(),
	])
}
