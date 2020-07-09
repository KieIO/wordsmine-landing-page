import { API_URL } from "./apiUrl";


export const HTTP_STATUS_SUCCESS = 200;

   export const login  = async (data) => {
        let status = 400;
        
       var formData = new FormData();

       for (var k in data) {
           formData.append(k, data[k]);
       }

        return fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // 'Content-type': 'application/json; charset=UTF-8',
            // body: JSON.stringify({...data}),
            body: formData
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
