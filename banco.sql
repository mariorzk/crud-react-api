-- Cria o banco de dados chamado 'crud'
CREATE DATABASE crud;

-- Usa o banco de dados 'crud'
USE crud;

-- Cria a tabela 'usuarios'
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    fone VARCHAR(255),
    nascimento VARCHAR(255)
);
