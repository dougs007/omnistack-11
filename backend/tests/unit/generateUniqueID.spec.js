const generateUniqueID = require('../../src/utils/gerenateUniqueID');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueID();

    expect(id).toHaveLength(8);
  });
});

