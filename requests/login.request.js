import http from 'k6/http';
import Utils from '../utils/util.js';

export function login() {
  const user = Utils.getUser('usuario');
  
  const res = http.post(`${Utils.getBaseUrl()}/login`, JSON.stringify({
    username: user.username,
    password: user.password
  }), {
    headers: { 'Content-Type': 'application/json' }
  });

  return res.json('accessToken');
}
// export default class Login {
//     #token

//     access(email, password) {
//     let response = http.post(`${Utils.getBaseUrl()}/login`, JSON.stringify({
//         "email": email,
//         "password": password
//     }),{
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     this.#token = response.json('accessToken');
//     check(response, {
//         'status was 200': (r) => r.status === 201,
// })
//     }
//     getToken() {
//         return this.#token;
//     }
// }