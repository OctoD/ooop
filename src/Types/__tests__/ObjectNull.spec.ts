import ObjectNull from '../ObjectNull';
import * as basetests from './__ignore__/baseTests';

describe(ObjectNull.name, () => {
  basetests.hasEqualsTo(ObjectNull);
  basetests.hasName(ObjectNull);
  basetests.hasToString(ObjectNull);
  basetests.hasValue(ObjectNull);
  basetests.isNullable(ObjectNull, true);
});
