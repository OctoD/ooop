import ObjectFunction from '../ObjectFunction';
import * as basetests from './__ignore__/baseTests';

describe(ObjectFunction.name, () => {
  basetests.hasEqualsTo(ObjectFunction);
  basetests.hasName(ObjectFunction);
  basetests.hasToString(ObjectFunction);
  basetests.hasValue(ObjectFunction);
  basetests.isNullable(ObjectFunction, false);
});
