const generateUniqueID = require('../../src/utils/gerenateUniqueID');
const connection = require('../database/connection');

module.exports = {

  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json({ ongs });
  },

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = generateUniqueID();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;

    const ong = await connection('ongs')
      .where('id', id)
      .select('*')
      .first();

    if (!ong) {
      return res.status(200).json({
        error: 'Ong not found!'
      });
    }
    if (ong) {
      await connection('ongs').where('id', id).delete();
    }

    return res.status(204).send();
  }
};
