import { createStore } from 'redux';
import {Services} from '../../services/users.service';
import store from '../store';

const START_GET_USERS = 'START_GET_USERS';
const SUCCESS_GET_USERS = 'SUCCESS_GET_USERS';

const startGetUsers = payload => ({
    type: START_GET_USERS,
    ...payload
});

const successGetUsers = payload => ({
    type: SUCCESS_GET_USERS,
    ...payload
});

export const axiosUsers = payload => {
    return dispatch => {
        dispatch(startGetUsers());
        Services.getUsers(({data}) => {
            dispatch(successGetUsers(data));
        }, (error) => {

        });
    }
}