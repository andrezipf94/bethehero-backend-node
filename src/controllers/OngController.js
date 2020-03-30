const generateUniqueID = require('../utils/generateUniqueID');
const connection = require('../database/connection');

module.exports = {
  async create(req, resp) {
    const {
      name, email, whatsapp, city, uf,
    } = req.body;
    const id = generateUniqueID();
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    resp.json({ id });
  },
  async index(req, resp) {
    const ongs = await connection('ongs').select('*');
    return resp.json(ongs);
  },
};
