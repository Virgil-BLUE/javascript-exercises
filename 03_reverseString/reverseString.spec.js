const reverseString = require('./reverseString');
jest.setTimeout(60000)


describe('reverseString', () => {
  test('reverses single word', (normalString) => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test.skip('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh');
  });

  test.skip('works with numbers and punctuation', () => {
    expect(reverseString('123! abc! Hello, Odinite.')).toEqual(
      '.etinidO ,olleH !cba !321'
    );
  });
  test.skip('works with blank strings', () => {
    expect(reverseString('')).toEqual('');
  });
});
