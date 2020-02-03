const URL = 'https://reqres.in/api/'
const getDataUsers = async(page) => {
     const response = await fetch(`${URL}users?page=${page}`)
	return response.json()
}
export {
	getDataUsers
}
