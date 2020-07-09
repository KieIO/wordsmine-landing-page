import { serializeForm, API_URL } from './utils.api';

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
            console.log(response);
            return response
        })
        .catch(function (response) {
            //handle error
            console.log(response);
            throw response
        });
};


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
