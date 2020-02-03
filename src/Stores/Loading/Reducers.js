import {LOADING} from './constant'
import INITIAL_STATE from "./State";

const LoadingReducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
		case LOADING.SHOW:
			return true
		case LOADING.HIDE:
			return false
		default:
			return state
	}
}
export default LoadingReducer
