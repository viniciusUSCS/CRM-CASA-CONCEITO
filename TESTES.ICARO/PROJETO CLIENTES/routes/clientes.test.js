const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

// Importações do Jest
const { expect } = require('jest');
const request = require('supertest');

describe('Rota de teste', () => {
  it('Deve retornar "deu certo"', async () => {
    const response = await request(router).get('/test');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('deu certo');
  });
});

describe('Rota de visualização', () => {
  it('Deve retornar o cliente com o id especificado', async () => {
    const cliente = await Cliente.create({
      nome: 'Cliente teste',
      description: 'Cliente comum',
      endereço: 'Rua x, 0',
      telefone: '1234-5678',
      email: 'cliente@teste.com.br',
      feedback: 5,
    });

    const response = await request(router).get('/view/' + cliente.id);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      cliente,
    });
  });
});

describe('Rota de envio', () => {
  it('Deve adicionar o cliente com os dados especificados', async () => {
    await request(router).post('/add', {
      nome: 'Cliente teste',
      description: 'Cliente comum',
      endereço: 'Rua x, 0',
      telefone: '1234-5678',
      email: 'cliente@teste.com.br',
      feedback: 5,
    });

    const cliente = await Cliente.findOne({
      where: {nome: 'Cliente teste'},
    });

    expect(cliente).toBeDefined();
    expect(cliente.nome).toBe('Cliente teste');
  });
});
