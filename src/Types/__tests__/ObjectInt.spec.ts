import ObjectInt from '../ObjectInt';
import * as basetests from './__ignore__/baseTests';

describe(ObjectInt.name, () => {
  basetests.hasEqualsTo(ObjectInt);
  basetests.hasName(ObjectInt);
  basetests.hasToString(ObjectInt);
  basetests.hasValue(ObjectInt);
  basetests.isNullable(ObjectInt, false);
});
