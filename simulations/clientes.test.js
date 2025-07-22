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

export function setup() {
    return login();
};

export default function (token) {
    // const token = login();

    group('Buscar clientes - Get/clientes', function () {
        const res = http.get(`${Utils.getBaseUrl()}/customers`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        check(res, { 'Status 200 - Clientes': (r) => r.status === 200 });
    });

    group('Cadastrar cliente - Post/clientes', function () {
        const payload = JSON.stringify({
            address: { id: "1" },
            email: `cliente${Math.random().toString(36).substring(2, 10)}@teste.com`,
            firstName: `Nome${Math.random().toString(36).substring(2, 6)}`,
            lastName: `Sobrenome${Math.random().toString(36).substring(2, 6)}`,
            phone: `+55${Math.floor(1000000000 + Math.random() * 9000000000)}`
        });

        const res = http.post(`${Utils.getBaseUrl()}/customers`, payload, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        check(res, { 'Status 201 - Cliente criado': (r) => r.status === 201 });
        sleep(1);
    })

};