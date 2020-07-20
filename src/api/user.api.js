import { serializeForm, API_URL } from './utils.api';

const axios = require('axios');

export const HTTP_STATUS_SUCCESS = 200; 

export const login = async (data) => {
    return axios({
        method: 'post',
        url: `${API_URL}/login`,
        data: serializeForm(data),
        withCredentials: true,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
        .then(function (response) {
            //handle success
            // console.log("header: ", response)
            return response;
        })
        .catch(function (response) {
            // handle error
            console.debug(response);
            throw response;
        });
};

export const register = async (data) => {
    const { authEmail, username, password } = data;

    const dataRegister = {
        authEmail: authEmail,
        password: password,
        authName: username,
        firstName: 'Guess',
        lastName: 'Guess',
        dateOfBirth: '2020-01-01T00:00:00.52Z',
        phone: '0123456789'
    }

    return axios({
        method: 'post',
        url: `${API_URL}/register`,
        data: serializeForm(dataRegister),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(result => {
        return result
    }).catch(err => {
        return err.response.status
    })
}

export const getlistWord = async () => {
    return axios({
        method: 'get',
        url: `${API_URL}/api/word/list`,
        withCredentials: true,
    })
        .then(function (response) {
            //handle success
            console.log(response);
            return response
        })
        .catch(function (response) {
            //handle error
            console.log(response.message);
            throw response
        });
};

export const getProfile = async (data) => {
    return axios({
        method: 'get',
        url: `${API_URL}/api/user/profile`,
        withCredentials: true,
    }).then(result => {
        return result
    }).catch(err => {
        throw err
    })
}

export const logout = async (data) => {
    return axios({
        method: 'post',
        url: `${API_URL}/api/logout`,
        withCredentials: true,
    }).then(result => {
        return result
    }).catch(err => {
        return err.message
    })
}
