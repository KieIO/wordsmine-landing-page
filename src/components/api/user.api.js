import { serializeForm, API_URL } from './utils.api';
import { message } from 'antd';

const axios = require('axios');

export const HTTP_STATUS_SUCCESS = 200;

export const login = async (data) => {
    return axios({
        method: 'post',
        url: `${API_URL}/login`,
        data: serializeForm(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
        .then(function (response) {
            //handle success
            document.cookie = `tokenUser=${response.data.authToken}`;
        })
        .catch(function (response) {
            //handle error
            console.log(response);
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
        message.success("Register Successfully!")
        return result
    }).catch(err => {
        message.error("Register fail, please try again!")
        return err.response.status
    })
}

export const getlistWord = async () => {
    return axios({
        method: 'get',
        url: `${API_URL}/api/word/list`,
    })
        .then(function (response) {
            //handle success
            console.log(response);
            return response
        })
        .catch(function (response) {
            //handle error
            console.log(response);
            throw response
        });
};
