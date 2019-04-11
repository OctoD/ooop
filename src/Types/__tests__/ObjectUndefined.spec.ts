import ObjectUndefined from '../ObjectUndefined';
import * as basetests from './__ignore__/baseTests';

describe(ObjectUndefined.name, () => {
  basetests.hasEqualsTo(ObjectUndefined);
  basetests.hasName(ObjectUndefined);
  basetests.hasToString(ObjectUndefined);
  basetests.hasValue(ObjectUndefined);
  basetests.isNullable(ObjectUndefined, true);
});
