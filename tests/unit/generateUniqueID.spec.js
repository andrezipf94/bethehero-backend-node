const generateUniqueID = require('../../src/utils/generateUniqueID');

describe('Generates an unique ID', () => {
  it('should generate an unique id', () => {
    const id = generateUniqueID();
    expect(id).toHaveLength(8);
  });
});
