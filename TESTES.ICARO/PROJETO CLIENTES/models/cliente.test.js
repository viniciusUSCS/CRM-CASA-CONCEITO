const Sequelize = require('sequelize');
const db = require('../db/connection');
const Cliente = require('./cliente');

test('O modelo Cliente possui campos esperados', () => {
    const cliente = new Cliente({
        nome: 'Fulano de Tal',
        description: 'Cliente comum',
        endereço: 'Rua dos testes, 0',
        telefone: '1234-5678',
        email: 'cliente@exemplo.com',
        feedback: 5,
    });

    expect(cliente.fields).toEqual([
        'nome',
        'description',
        'endereço',
        'telefone',
        'email',
        'feedback',
    ]);
});

test('Modelo cliente pode ser salvo', () => {
    const cliente = new Cliente({
        nome: 'Fulano de Tal',
        description: 'Cliente comum',
        endereço: 'Rua dos testes, 0',
        telefone: '1234-5678',
        email: 'cliente@exemplo.com',
        feedback: 5,
    });

    cliente.save();

    expect(cliente.id).toBeDefined();
});
