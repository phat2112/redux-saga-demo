import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Users} from '../../Stores/User/Selector'
import {loadUsers} from '../../Stores/User/Action'
import { Table, Pagination } from 'antd'


const DataUser = ({users, loadUsers, totalUsers}) => {
	const columns = [
		{
			title: 'id',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
	];
	const pageDefault = 1;
	useEffect(() => {
		console.log('1', pageDefault)
		loadUsers(pageDefault)
		console.log('2')
	},[])
	const handlePagination = (page) => {
		loadUsers(page)
	}
	return(
		<>
			<Table dataSource={users} columns={columns} rowKey="id"/>
			<Pagination defaultCurrent={1} total={totalUsers} onChange={handlePagination}/>
		</>
	)
}
// const mapStateToProps = (state) => ({
// 	users: User.user(state),
// 	totalUsers: User.totalUsers(state),
//
// })
// const mapDispatchToProps = (dispatch) => ({
// 	loadUser: (page) => dispatch(loadUsers(page))
// })
// export default connect(mapStateToProps, mapDispatchToProps)(DataUser)

const mapStateToProps = (state) => ({
	users: Users.users(state),
	totalUsers: Users.totalUsers(state),
})
const mapDispatchToProps = (dispatch) => ({
	loadUsers: (page) => dispatch(loadUsers(page))
})
export default connect(mapStateToProps, mapDispatchToProps)(DataUser);

