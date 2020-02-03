import { USERS } from "../User/constant";
import INITIAL_STATE from './State.js'

const usersReducer = (state = INITIAL_STATE, action) => {
    if (action.type === USERS.LOAD_SUCCESS) {
        return { ...state, users: action.users.data, total: action.users.total }
    }
    return state
}
export default usersReducer;