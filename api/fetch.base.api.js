const API_URL = 'https://jsonplaceholder.typicode.com';
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
    const headers =
      authorizationToken !== undefined
        ? {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${authorizationToken}`,
          }
        : {'Content-type': 'application/json; charset=UTF-8'};
    return fetch(`${this.apiUrl}/${pathname}`, {
      method,
      body: JSON.stringify(body),
      headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonRes) => {
        return jsonRes;
      })
      .catch((err) => {
        throw new Error(err.message);
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
