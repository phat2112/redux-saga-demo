import { combineReducers } from 'redux'
import userReducer from '../User/Reducer'
import loadingReducer from '../Loading/Reducers'

const rootReducer = combineReducers({
	users: userReducer,
	isLoading: loadingReducer,
})
export default rootReducer
