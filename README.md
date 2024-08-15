# 🎬 Rater Movie Backend

Este projeto é a aplicação backend do Rater Movies, desenvolvida utilizando [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [TypeScript](https://www.typescriptlang.org/), [Prisma](https://www.prisma.io/), e outras ferramentas e bibliotecas para criar uma API segura e robusta que permite o gerenciamento de usuários e autenticação.

## 📋 Índice

- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Autenticação e Validação](#autenticação-e-validação)
- [Documentação da API](#documentação-da-api)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🚀 Instalação

### Pré-requisitos

- Node.js
- npm ou yarn
- Banco de Dados PostgreSQL

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/VictorParizio/orquestre-rater-backend.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd orquestre-rater-backend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

4. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/database_name"
   PRIVATE_KEY=./keys/private.key
   PUBLIC_KEY=./keys/public.key
   JWT_EXPIRATION="1h"
   ```

5. Execute as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

6. Inicie o servidor:

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

   A API estará disponível em [http://localhost:3000](http://localhost:3000) ou acesse a documentação pelo [Swagger Ui](https://orquestre-rater-production.up.railway.app/)

## 📖 Como Usar

Após iniciar o servidor, você pode:

- Registrar novos usuários e obter um token JWT
- Realizar login e obter um token JWT
- Gerenciar informações dos usuários (atualização e exclusão)
- Acessar a documentação da API para explorar os endpoints disponíveis

## 📁 Estrutura de Pastas

Aqui está uma visão geral da estrutura de pastas do projeto:

```
├── keys
│   ├── private.key     # Chave privada para gerar tokens JWT
│   ├── public.key      # Chave publica para validar tokens JWT
├── prisma
│   ├── schema.prisma   # Esquema do banco de dados Prisma
├── src
│   ├── config          # Configuração de bibliotecas
│   ├── controllers     # Controladores de rotas
│   ├── helpers         # Funções e classes auxiliares
│   ├── middlewares     # Middlewares para validação, autenticação, etc.
│   ├── repositories    # Gerencia a interação com a camada de dados
│   ├── routes          # Definição das rotas da API
│   ├── schemas         # Validar estruturas de dados 
│   ├── services        # Lógica de negócios e serviços auxiliares
│   ├── types           # Definições de tipos TypeScript
│   ├── utils           # Funções utilitárias
│   ├── server.ts       # Ponto de entrada do servidor
│   ├── swagger.json    # Documentação do projeto com Swagger UI
├── .env
├── package.json
└── README.md
```

## 🌟 Funcionalidades

- **Gerenciamento de Usuários**: Registro, login, atualização e exclusão de contas.
- **Autenticação JWT**: Proteção de rotas utilizando tokens JWT.
- **Rate Limiting**: Limitação de requisições para prevenir abusos e ataques.
- **Segurança**: Uso de Helmet e validações com Joi para garantir a integridade e segurança dos dados.
- **Documentação da API**: Documentação interativa utilizando Swagger UI.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de aplicações web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Prisma**: ORM para manipulação do banco de dados.
- **JWT**: Implementação de autenticação com JSON Web Tokens.
- **Helmet**: Middleware de segurança para Express.
- **Joi**: Validação de schemas de dados.
- **Express Rate Limit**: Middleware para limitar a taxa de requisições.
- **Swagger UI**: Documentação interativa da API.

## 🔒 Autenticação e Validação

A aplicação utiliza o **JWT** para autenticação, protegendo rotas sensíveis e garantindo que apenas usuários autenticados possam acessar determinados recursos. **Joi** é utilizado para validação de dados, tanto na entrada de dados quanto no processamento, assegurando a conformidade com os padrões definidos.

## 📚 Documentação da API

A documentação da API está disponível em [http://localhost:3000/](http://localhost:3000/) após iniciar o servidor. A documentação foi criada utilizando o **Swagger UI**, permitindo explorar e testar os endpoints da API de forma interativa.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Autor

**Victor Parizio**

## Contato

Se tiver alguma dúvida, entre em contato:

- [Hotmail](victorparizio@hotmail.com)
- [LinkedIn](https://www.linkedin.com/in/victorpariziobackend/)
- [GitHub](https://github.com/VictorParizio)
- [Portfólio](https://portfolio-victor-parizio.vercel.app/)
