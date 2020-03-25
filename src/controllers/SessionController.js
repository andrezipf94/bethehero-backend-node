const connection = require('../database/connection');

module.exports = {
    async create(req, resp) {
        const { id } = req.body;
        
        if(!id)
            return resp.status(400).json({ error: 'Invalid request body.' });

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong)
            return resp.status(400).json({ error: 'No ONG found with the informed ID.' })
        
        return resp.json(org);
    }
};