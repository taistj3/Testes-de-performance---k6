# Testes-de-performance-k6
Testes de performance usando K6
Local da API: https://github.com/taistj3/Testes-de-performance_K6.git
Comandos para subir api: 
    npm install --force
    npm run docker:db //subir o contâiner
    npx prisma migrate dev //subir bc de dados, caso precise
    npm run start //subir api
 k6 run test.js //rodar os testes (digitar o caminho completo)