import ObjectByte from '../ObjectByte';
import * as basetests from './__ignore__/baseTests';
import ObjectInt from '../ObjectInt';
import ObjectBitArray from '../ObjectBitArray';

describe(ObjectByte.name, () => {
  basetests.hasEqualsTo(ObjectByte);
  basetests.hasName(ObjectByte);
  basetests.hasToString(ObjectByte);
  basetests.hasValue(ObjectByte);
  basetests.isNullable(ObjectByte, false);

  test(`ObjectByte.prototype.item`, () => {
    const byte = new ObjectByte(0);

    expect(byte.item(new ObjectInt(0)).value()).toBe(0);
    expect(byte.item(new ObjectInt(1)).value()).toBe(0);
    expect(byte.item(new ObjectInt(2)).value()).toBe(0);
    expect(byte.item(new ObjectInt(3)).value()).toBe(0);
    expect(byte.item(new ObjectInt(4)).value()).toBe(0);
    expect(byte.item(new ObjectInt(5)).value()).toBe(0);
    expect(byte.item(new ObjectInt(6)).value()).toBe(0);
    expect(byte.item(new ObjectInt(7)).value()).toBe(0);
  });

  test(`ObjectByte.prototype.toBitArray`, () => {
    expect(new ObjectByte(0).toBitArray().equalsTo(ObjectBitArray)).toBeTruthy();
  });

  test(`ObjectByte.prototype.toInt`, () => {
    expect(new ObjectByte(0).toInt().equalsTo(ObjectInt)).toBeTruthy();
  });

  test(`ObjectByte.prototype.value`, () => {
    const byte = new ObjectByte(0);

    expect(byte.value()).toBe(0);
    expect(() => byte.value(new ObjectInt(255))).not.toThrow();
    expect(byte.value()).toBe(255);
  });
});