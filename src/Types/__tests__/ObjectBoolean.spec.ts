import ObjectBoolean from '../ObjectBoolean';
import * as basetests from './__ignore__/baseTests';

describe(ObjectBoolean.name, () => {
  basetests.hasEqualsTo(ObjectBoolean);
  basetests.hasName(ObjectBoolean);
  basetests.hasToString(ObjectBoolean);
  basetests.hasValue(ObjectBoolean);
  basetests.isNullable(ObjectBoolean, false);

  test(ObjectBoolean.prototype.isFalse.name, () => {
    expect(new ObjectBoolean(false).isFalse().value()).toBeTruthy();
    expect(new ObjectBoolean(false).isTrue().value()).toBeFalsy();
  });

  test(ObjectBoolean.prototype.isTrue.name, () => {
    expect(new ObjectBoolean(true).isTrue().value()).toBeTruthy();
    expect(new ObjectBoolean(true).isFalse().value()).toBeFalsy();
  });
});
