import React from 'react';
import api from "./api";
import {loginSuccess, setAvatar, setUser} from "./authSlice";

class UserService {
    changeAvatar(userId, avatarLink) {
        return api.post('/homo-app/user/avatar/update', {
            UserId: userId,
            Avatar: avatarLink
        })
            .then((resp) => {
                debugger
               return resp;
            });
    }

    getUser(userId) {
       return api.get(`/homo-app/user/${userId}`)
            .then((resp) => {
                return resp
            });
    }

    update(user) {
        return api.post(`/homo-app/user/update`, user)
            .then((resp) => {
                return resp
            });
    }
}

const userService = new UserService();

export const getUser = (userId) => (dispatch) => {
    userService.getUser(userId).then(
        resp => {
            dispatch(setUser(resp))
            return resp
        }
    )
}

export const updateAvatar = (userId, link) => (dispatch) => {
    debugger
    userService.changeAvatar(userId, link).then(
        resp => {
            dispatch(setAvatar(link))
            return resp
        }
    )
}

export const updateUser = (user) => (dispatch) => {
    userService.update(user).then(
        resp => {
            dispatch(setUser(user))
            return resp
        }
    )
}
