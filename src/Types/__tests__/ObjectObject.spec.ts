import ObjectObject from '../ObjectObject';
import * as basetests from './__ignore__/baseTests';

describe(ObjectObject.name, () => {
  basetests.hasEqualsTo(ObjectObject);
  basetests.hasName(ObjectObject);
  basetests.hasToString(ObjectObject);
  basetests.hasValue(ObjectObject);
  basetests.isNullable(ObjectObject, true);
});
