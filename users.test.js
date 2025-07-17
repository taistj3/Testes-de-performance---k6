import http from 'k6/http';
import Utils from './utils/util.js';
import data from 'data/users.json';
import { group } from 'k6';

export default function () {

    let login = new Login();
 
    group('Login e get token', function () {
  login.access(data.usuario.email, data.usuario.pass);
    });

    group('Listar usuários', function () {
  
    });
}
// const url = `${Utils.getBaseUrl()}/login`;
//   const payload = JSON.stringify({ 
    
//   });

//   const params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   http.post(url, payload, params);