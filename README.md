# Testes de Performance com K6

Repositório com testes de performance desenvolvidos com o **Grafana K6**.

##  API utilizada

O backend utilizado para os testes está disponível em:  
[https://github.com/taistj3/Testes-de-performance_K6.git](https://github.com/taistj3/Testes-de-performance_K6.git)

---

##  Como subir a API

Na raiz do projeto da API, execute os seguintes comandos:

```bash
npm install --force          # Instala as dependências
npm run docker:db            # Sobe o container do banco de dados (Docker)
npx prisma migrate dev       # Executa as migrations (se necessário)
npm run start                 # Inicia a API
