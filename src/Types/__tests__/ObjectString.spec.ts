import ObjectString from '../ObjectString';
import * as basetests from './__ignore__/baseTests';

describe(ObjectString.name, () => {
  basetests.hasEqualsTo(ObjectString);
  basetests.hasName(ObjectString);
  basetests.hasToString(ObjectString);
  basetests.hasValue(ObjectString);
  basetests.isNullable(ObjectString, false);
});
