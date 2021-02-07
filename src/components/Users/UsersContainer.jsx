import React from 'react';
import Users from "./Users"
import { followeAC, unfollowAC, setUsersAC } from '../../Redux/users-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followeAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
        
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;