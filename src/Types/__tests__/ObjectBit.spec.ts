import ObjectBit from '@Types/ObjectBit';
import * as basetests from './__ignore__/baseTests';
import ObjectBoolean from '@Types/ObjectBoolean';
import ObjectString from '@Types/ObjectString';
import ObjectNull from '@Types/ObjectNull';
import ObjectUndefined from '@Types/ObjectUndefined';
import ObjectInt from '@Types/ObjectInt';

describe(ObjectBit.name, () => {
  basetests.hasEqualsTo(ObjectBit);
  basetests.hasName(ObjectBit);
  basetests.hasToString(ObjectBit);
  basetests.hasValue(ObjectBit);
  basetests.isNullable(ObjectBit, false);

  it(ObjectBit.prototype.toBoolean.name, () => {
    const bit = new ObjectBit(1);

    expect(typeof bit.toBoolean).toBe('function');
    expect(bit.toBoolean()).toBeDefined();
    expect(typeof bit.toBoolean()).toBe('object');
    expect(bit.toBoolean().equalsTo(ObjectBoolean)).toBeTruthy();
  });

  it('Casts every kind of Object to a Bit', () => {
    const bit = new ObjectBit(1);

    expect(bit.cast(new ObjectString('')).value()).toBe(0);
    expect(bit.cast(new ObjectNull()).value()).toBe(0);
    expect(bit.cast(new ObjectUndefined()).value()).toBe(0);
    expect(bit.cast(new ObjectInt(10)).value()).toBe(1);
    expect(bit.cast(new ObjectInt(-10)).value()).toBe(0);
  });
});
