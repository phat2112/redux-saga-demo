import {USER} from "./constant";

const loadUsers = page => ({
	type: USER.LOAD,
	page
});
const setUsers = users => ({
	type: USER.LOAD_SUCCESS,
	users
});
const setError = error => ({
	type: USER.LOAD_FAIL,
	error
})
export {
	loadUsers,
	setUsers,
	setError,
}
