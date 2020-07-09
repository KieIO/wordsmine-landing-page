import { API_URL } from "./apiUrl";
import axios from 'axios';

export const HTTP_STATUS_SUCCESS = 200;

export const login = async (data) => {
    let status = 400;

    var formData = new FormData();

    for (var k in data) {
        formData.append(k, data[k]);
    }

    axios({
        method: 'post',
        url: 'https://appword.kie.io/login',
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

    // .then((response) => {
    //     status = response.status;
    //     return response.json();
    // })
    // .then((result) => {
    //     if (status === HTTP_STATUS_SUCCESS) {
    //         return result;
    //     }
    //     if (result && result.message) {
    //         throw new Error(result.message);
    //     } else {
    //         throw new Error('Có lỗi xảy ra. Vui lòng thử lại');
    //     }
    // })
    // .catch((err) => {
    //     throw err;
    // });

    // return fetch(`${API_URL}/login`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //     // 'Content-type': 'application/json; charset=UTF-8',
    //     // body: JSON.stringify({...data}),
    //     body: formData
    // })
    // .then((response) => {
    //     status = response.status;
    //     return response.json();
    // })
    // .then((result) => {
    //     if (status === HTTP_STATUS_SUCCESS) {
    //         return result;
    //     }
    //     if (result && result.message) {
    //         throw new Error(result.message);
    //     } else {
    //         throw new Error('Có lỗi xảy ra. Vui lòng thử lại');
    //     }
    // })
    // .catch((err) => {
    //     throw err;
    // });
};

export const register = async (data) => {
    const { authEmail, username, password } = data;
    const getStringEmail = authEmail.substr(0, authEmail.indexOf('@'));
    const dataRegister = {
        authEmail: authEmail,
        password: password,
        authName: username,
        firstName: 'Guess',
        lastName: 'Guess',
        dateOfBirth: '2019-10-12T00:00:00.52Z',
        phone: '0123456789'
    }

    // console.log(dataRegister)
    axios({
        method: 'post',
        url: 'https://appword.kie.io/register',
        data: "authEmail=test10%40gmail.com&password=123456&authName=test10&firstName=test&lastName=10&dateofBirth=2019-10-12T00:00:00.52Z&phone=0123456789",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err)
    })
}