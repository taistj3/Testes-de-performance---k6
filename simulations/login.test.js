import { check } from 'k6';
import { login } from '../requests/login.request.js';

export default function () {
    const token = login();

    check(token, { 'Token recebido': (t) => t !== undefined });
}
