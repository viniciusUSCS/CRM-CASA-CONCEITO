const io = require('socket.io-client');
const { expect } = require('jest');

describe('Chat intranet', () => {
  let socket;

  beforeAll(() => {
    socket = io('http://localhost:3000');
  });

  afterAll(() => {
    socket.disconnect();
  });

  it('deve se conectar ao servidor', () => {
    expect(socket.connected).toBeTruthy();
  });

  it('deve lidar com a solicitação de login', async () => {
    const username = 'testUser';
    socket.emit('join-request', username);

    await expect(socket.emit('join-request', username)).resolves.toBeUndefined();
  });

  it('deve receber atualização da lista de usuários', async () => {
    const mockUserList = ['user1', 'user2', 'user3'];
    socket.emit('list-update', { list: mockUserList });

    await expect(socket.emit('list-update', { list: mockUserList })).resolves.toBeUndefined();
    expect(userList).toEqual(mockUserList);
    renderUserList();
  });

  it('deve receber evento show-msg', async () => {
    const mockMessage = {
      username: 'user1',
      message: 'Hello, everyone!',
    };
    socket.emit('show-msg', mockMessage);

    await expect(socket.emit('show-msg', mockMessage)).resolves.toBeUndefined();
    addMessage('msg', mockMessage.username, mockMessage.message);
  });

  it('deve lidar com evento de desconexão', async () => {
    socket.emit('disconnect');

    await expect(socket.emit('disconnect')).resolves.toBeUndefined();
    expect(userList).toEqual([]);
    renderUserList();
  });
});
