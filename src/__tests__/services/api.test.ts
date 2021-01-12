import { api } from '../../services/mockapi';

describe('Mock API', () => {
  it('should respond with an valid object', async () => {
    const response = await api.get('/videos');
    expect(response.status).toBe(200);
  });

  it('should respond with an valid object', async () => {
    const response = await api.get('/videos');
    expect(response.data).toBeInstanceOf(Object);
  });

  it('should respond with video items', async () => {
    const response = await api.get('/videos');
    expect(response.data).toHaveProperty('items');
  });

  it('should respond with search items', async () => {
    const response = await api.get('/search');
    expect(response.data).toHaveProperty('items');
  });

  it('should respond with videoCategories items', async () => {
    const response = await api.get('/videoCategories');
    expect(response.data).toHaveProperty('items');
  });
});

export {};
