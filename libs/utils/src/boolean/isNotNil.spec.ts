import isNotNil from './isNotNil';

describe('boolean - isNotNil', () => {
  it('normal case test', () => {
    expect(isNotNil(undefined)).toBeFalsy();
    expect(isNotNil('1')).toBeTruthy();
  });
});
