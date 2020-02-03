import { USERS } from "../User/constant";

const loadUsers = (page) => ({
    type: USERS.LOAD,
    page
})
const setUsers = users => ({
    type: USERS.LOAD_SUCCESS,
    users
})

const setError = error => ({
    type: USERS.LOAD_FAIL,
    error
})
export {
    loadUsers,
    setUsers,
    setError
}