import ObjectBoolean from '../ObjectBoolean';
import * as basetests from './__ignore__/baseTests';

describe(ObjectBoolean.name, () => {
  basetests.hasEqualsTo(ObjectBoolean);
  basetests.hasName(ObjectBoolean);
  basetests.hasToString(ObjectBoolean);
  basetests.hasValue(ObjectBoolean);
  basetests.isNullable(ObjectBoolean, false);
});
