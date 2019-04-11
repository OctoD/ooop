import ObjectArray from '../ObjectArray';
import * as basetests from './__ignore__/baseTests';

describe(ObjectArray.name, () => {
  basetests.hasEqualsTo(ObjectArray);
  basetests.hasName(ObjectArray);
  basetests.hasToString(ObjectArray);
  basetests.hasValue(ObjectArray);
  basetests.isNullable(ObjectArray, false);
});
