import {USER} from "./constant";
import INITIAL_STATE from "./state";

const userReducer = ( state= INITIAL_STATE, action) => {
	if(action.type === USER.LOAD_SUCCESS) {
		return {...state, users: action.users.data, total: action.users.total}
	}
	return state
}
export default userReducer
