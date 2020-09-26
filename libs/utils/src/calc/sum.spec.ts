import sum from './sum';

describe('calc - sum', () => {
  it('[1,1] => 2', () => {
    expect(sum([1, 1])).toEqual(2);
  });
});
