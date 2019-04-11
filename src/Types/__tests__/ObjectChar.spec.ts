import ObjectChar from '../ObjectChar';
import * as basetests from './__ignore__/baseTests';

describe(ObjectChar.name, () => {
  basetests.hasEqualsTo(ObjectChar);
  basetests.hasName(ObjectChar);
  basetests.hasToString(ObjectChar);
  basetests.hasValue(ObjectChar);
  basetests.isNullable(ObjectChar, false);
});
