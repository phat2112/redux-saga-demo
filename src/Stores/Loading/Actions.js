import {LOADING} from './constant'

const showLoading = () => ({
	type: LOADING.SHOW,
})
const hideLoading = () => ({
	type: LOADING.HIDE,
})
export {
	showLoading,
	hideLoading,
}
