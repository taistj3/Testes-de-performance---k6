import http from 'k6/http';
import { check, group, sleep } from 'k6';
import Utils from '../utils/util.js';
import { login } from '../requests/login.request.js';

export const options = {
  stages: [
    // { duration: '30s', target: 20 },
    { duration: '5s', target: 5 },
    // { duration: '20s', target: 0 },
  ],
};

export default function () {
  const token = login();

  group('Buscar produtos - GET /produtos', function () {
    const res = http.get(`${Utils.getBaseUrl()}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    check(res, { 'Status 200 - Produtos': (r) => r.status === 200 });
    sleep(1);
  });

  group('Cadastrar produto - POST /produtos', function () {
    const payload = JSON.stringify({
      name: `Produto ${Math.random().toString(36).substring(7)}`,
      description: 'Descrição de teste',
      itemPrice: Math.floor(Math.random() * 100),
    });

    const res = http.post(`${Utils.getBaseUrl()}/products`, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    check(res, { 'Status 201 - Produto criado': (r) => r.status === 201 });
    sleep(1);
  });
}
