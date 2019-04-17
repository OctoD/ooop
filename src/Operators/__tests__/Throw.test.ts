import Throw from '@Operators/Throw';
import ObjectError from '@Types/ObjectError';

describe(`throw`, () => {
  test(`it works`, () => {
    const op = new Throw();

    op.left(new ObjectError());

    expect(() => op.apply()).toThrowError();
    expect(() => op.right()).toThrowError();
  });
});
