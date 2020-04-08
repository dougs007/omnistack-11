const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  // Run the migrations every time before each test.
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {

    const response = await request(app)
      .post('/ongs')
      .send({
        name: "ABRACE",
        email: "douglas@abrace.com.br",
        whatsapp: "5555555555",
        city: "Brasília",
        uf: "DF"
      });

    console.log(response.body);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  })
});
