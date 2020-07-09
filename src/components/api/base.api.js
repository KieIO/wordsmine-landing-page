import { API_URL } from '../../config/apiUrl.config';
const METHOD = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
export const HTTP_STATUS_SUCCESS = 200;
class BaseApi {
    constructor(pathUrl) {
        this.apiUrl = `${API_URL}/${pathUrl}`; // Ex: https:localhost:3000/user
    }

    /**
     * Base method
     * Input: method: POST, PUT, GET, DELETE
     * 		  pathname as string (Ex: "/register", "/login")
     *        body as Object
     * Note:
     */
    baseMethod = async (method, pathname, body, authorizationToken) => {
        let status = 400;
        const headers =
            authorizationToken !== undefined
                ? {
                    'Content-type': 'application/json; charset=UTF-8',
                    Authorization: `Bearer ${authorizationToken}`,
                }
                : { 'Content-type': 'application/json; charset=UTF-8' };
        return fetch(`${this.apiUrl}/${pathname}`, {
            method,
            body: JSON.stringify(body),
            headers,
        })
            .then((response) => {
                status = response.status;
                return response.json();
            })
            .then((result) => {
                if (status === HTTP_STATUS_SUCCESS) {
                    return result;
                }
                if (result && result.message) {
                    throw new Error(result.message);
                } else {
                    throw new Error('Có lỗi xảy ra. Vui lòng thử lại');
                }
            })
            .catch((err) => {
                throw err;
            });
    };

    post = (pathname, body = undefined, token = undefined) =>
        this.baseMethod(METHOD.POST, pathname, body, token);

    get = (pathname, body = undefined, token = undefined) =>
        this.baseMethod(METHOD.GET, pathname, body, token);

    put = (pathname, body = undefined, token = undefined) =>
        this.baseMethod(METHOD.PUT, pathname, body, token);

    delete = (pathname, body = undefined, token = undefined) =>
        this.baseMethod(METHOD.DELETE, pathname, body, token);
}

export default BaseApi;
