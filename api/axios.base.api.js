const axios = require('axios');

const API_URL = 'localhost:3000';
const METHOD = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
};
const HTTP_STATUS_SUCCESS = 200;
const ERROR_CONNECTION_REFUSED = {
  server: 'TypeError: Failed to fetch',
  client: 'Không thể kết nối đến máy chủ, vui lòng thử lại.',
};
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
        : {'Content-type': 'application/json; charset=UTF-8'};
    return axios({
      url: `${this.apiUrl}/${pathname}`,
      method,
      body: body,
      headers,
    })
      .then((response) => {
        status = response.status;
        return response;
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
        if (err.toString() === ERROR_CONNECTION_REFUSED.server) {
          throw new Error(ERROR_CONNECTION_REFUSED.client);
        }
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

module.exports = BaseApi;
