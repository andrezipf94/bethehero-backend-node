const connection = require('../database/connection');

module.exports = {
  async index(req, resp) {
    const ongId = req.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', ongId)
      .select('*');

    return resp.json(incidents);
  },
};
