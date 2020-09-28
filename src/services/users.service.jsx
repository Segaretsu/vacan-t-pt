import axios from 'axios';
import { API_ENDPOINT } from '../Constants';

export const Services = {
    addUser: (newUser, success, error) => {
        axios.post(API_ENDPOINT + 'users/', newUser)
            .then(success)
            .catch(error);
    },
    modifyUser: (userModify, success, error) => {
        axios.put(API_ENDPOINT + 'users/', userModify)
            .then(success)
            .catch(error);
    },
    deleteUser: (userDelete, success, error) => {
        axios.delete(API_ENDPOINT + 'users/', userDelete)
            .then(success)
            .catch(error);
    },
    getUsers: (success, error) => {
        axios.get(API_ENDPOINT + 'users/')
            .then(success)
            .catch(error)
    },
}