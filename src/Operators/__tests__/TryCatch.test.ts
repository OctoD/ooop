import TryCatch from '@Operators/TryCatch';
import ObjectString from '@Types/ObjectString';
import ObjectFunction from '@Types/ObjectFunction';

describe(`Try Catch`, () => {
  test(`it works`, () => {
    const mock = jest.fn();
    const fn1 = new ObjectFunction(() => {throw ``});
    const fn2 = new ObjectFunction(mock);
    const fn3 = new ObjectFunction(() => new ObjectString(`fooo`));
    const op = new TryCatch();

    op.try(fn1);
    op.catch(fn2);

    expect(() => op.apply()).not.toThrowError();
    expect(mock).toHaveBeenCalled();

    op.try(fn3);

    expect(op.apply().equalsTo(ObjectString)).toBeTruthy();
  });
});
