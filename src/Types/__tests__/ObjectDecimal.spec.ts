import ObjectDecimal from '../ObjectDecimal';
import * as basetests from './__ignore__/baseTests';

describe(ObjectDecimal.name, () => {
  basetests.hasEqualsTo(ObjectDecimal);
  basetests.hasName(ObjectDecimal);
  basetests.hasToString(ObjectDecimal);
  basetests.hasValue(ObjectDecimal);
  basetests.isNullable(ObjectDecimal, false);
});
