import mockFs from 'fs';

test('mytest', async () => {
  mockFs.existsSync('somefile');
  expect(1).toBe(1);
});
