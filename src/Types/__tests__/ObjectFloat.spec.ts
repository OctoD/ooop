import ObjectFloat from '@Types/ObjectFloat';
import * as basetests from './__ignore__/baseTests';

describe(ObjectFloat.name, () => {
  basetests.hasEqualsTo(ObjectFloat);
  basetests.hasName(ObjectFloat);
  basetests.hasToString(ObjectFloat);
  basetests.hasValue(ObjectFloat);
  basetests.isNullable(ObjectFloat, false);
});
