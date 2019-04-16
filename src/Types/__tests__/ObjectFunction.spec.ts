import ObjectFunction from '../ObjectFunction';
import * as basetests from './__ignore__/baseTests';
import ObjectInt from '../ObjectInt';

describe(ObjectFunction.name, () => {
  basetests.hasEqualsTo(ObjectFunction);
  basetests.hasName(ObjectFunction);
  basetests.hasToString(ObjectFunction);
  basetests.hasValue(ObjectFunction);
  basetests.isNullable(ObjectFunction, false);

  test(`ObjectFunction.prototype.apply`, () => {
    const mock = jest.fn().mockReturnValue(new ObjectInt(10));
    const fn = new ObjectFunction(mock);

    expect(() => fn.call()).not.toThrow();
    expect(mock).toHaveBeenCalled();
  });

  test(`ObjectFunction.prototype.call`, () => {
    const mock = jest.fn().mockReturnValue(new ObjectInt(10));
    const fn = new ObjectFunction(mock);

    expect(() => fn.apply([])).not.toThrow();
    expect(mock).toHaveBeenCalled();
  });
});
