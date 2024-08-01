# CRUD React API

Este projeto é um exemplo de uma aplicação simples de CRUD (Create, Read, Update, Delete) utilizando React para o frontend e uma API para o backend onde os dados são salvos em um banco MySQL.

## Índice

- Visão Geral
- Funcionalidades
- Tecnologias Utilizadas
- Requisitos
- Instalação
- Uso

## Visão Geral

Este repositório contém o código-fonte de um projeto CRUD simples usando React para o frontend e uma API RESTful para o backend.

## Funcionalidades

- Adicionar novos itens
- Listar itens
- Atualizar itens existentes
- Excluir itens

## Tecnologias Utilizadas

- **Frontend:** React, React Router, Axios (https://github.com/mariorzk/crud-react)
- **Backend:** API RESTful
- **MySQL 8.0**

## Requisitos

- Node.js (v14 ou superior)
- NPM (v6 ou superior)
- MySQL

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/mariorzk/crud-react-api.git
    ```
    ```bash
    cd crud-react-api
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configuração do banco de dados:<br>
   Acesse o terminal dentro da pasta da api e execute o script de configuração do banco de dados:
   ```bash
    mysql -u seu_usuario -p < banco.sql
    ```
   Nota: Substitua "seu_usuario" pelo seu usuario do MySQL.
   
4. Inicie a aplicação:
    ```bash
    npm start
    ```

## Uso

Depois de iniciar a aplicação, você pode acessar a interface do usuário no seu navegador em `http://localhost:5173` usando o frontend (https://github.com/mariorzk/crud-react).
A API estará rodando na porta 8800.
