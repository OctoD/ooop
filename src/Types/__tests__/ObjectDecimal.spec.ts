import ObjectDecimal from '../ObjectDecimal';
import * as basetests from './__ignore__/baseTests';
import { ObjectInt } from '../../types';

describe(ObjectDecimal.name, () => {
  basetests.hasEqualsTo(ObjectDecimal);
  basetests.hasName(ObjectDecimal);
  basetests.hasToString(ObjectDecimal);
  basetests.hasValue(ObjectDecimal);
  basetests.isNullable(ObjectDecimal, false);

  test(ObjectDecimal.prototype.cast.name, () => {
    const int = new ObjectInt(10);
    const decimal = new ObjectDecimal(10.222);

    expect(decimal.value()).toBe(10.22);
    expect(decimal.cast(int).value()).toBe(10.00);
  });
});
