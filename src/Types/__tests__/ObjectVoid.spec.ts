import ObjectVoid from '@Types/ObjectVoid';
import * as basetests from './__ignore__/baseTests';

describe(ObjectVoid.name, () => {
  basetests.hasEqualsTo(ObjectVoid);
  basetests.hasName(ObjectVoid);
  basetests.hasToString(ObjectVoid);
  basetests.hasValue(ObjectVoid);
  basetests.isNullable(ObjectVoid, false);
});
