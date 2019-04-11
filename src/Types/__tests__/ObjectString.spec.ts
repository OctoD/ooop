import ObjectString from '../ObjectString';
import * as basetests from './__ignore__/baseTests';
import ObjectInt from '../ObjectInt';

describe(ObjectString.name, () => {
  basetests.hasEqualsTo(ObjectString);
  basetests.hasName(ObjectString);
  basetests.hasToString(ObjectString);
  basetests.hasValue(ObjectString);
  basetests.isNullable(ObjectString, false);

  test(ObjectString.prototype.length.name, () => {
    const str = new ObjectString('lorem');

    expect(str.length().equalsTo(ObjectInt)).toBeTruthy();
    expect(str.length().value()).toBe(5);
  });
  
  test(ObjectString.prototype.toCharArray.name, () => {
    const str = new ObjectString('lorem');

    expect(str.value().length).toBe(5);
    expect(() => str.toCharArray()).not.toThrowError();
    expect(str.toCharArray().length().value()).toBe(5);
    expect(str.toCharArray().item(new ObjectInt(0)).value()).toBe('l');
    expect(str.toCharArray().item(new ObjectInt(1)).value()).toBe('o');
    expect(str.toCharArray().item(new ObjectInt(2)).value()).toBe('r');
    expect(str.toCharArray().item(new ObjectInt(3)).value()).toBe('e');
    expect(str.toCharArray().item(new ObjectInt(4)).value()).toBe('m');
  });

  test(ObjectString.prototype.toIntArray.name, () => {
    const str = new ObjectString('lorem');

    expect(str.value().length).toBe(5);
    expect(() => str.toIntArray()).not.toThrowError();
    expect(str.toIntArray().length().value()).toBe(5);
    expect(str.toIntArray().item(new ObjectInt(0)).value()).toBe(108);
    expect(str.toIntArray().item(new ObjectInt(1)).value()).toBe(111);
    expect(str.toIntArray().item(new ObjectInt(2)).value()).toBe(114);
    expect(str.toIntArray().item(new ObjectInt(3)).value()).toBe(101);
    expect(str.toIntArray().item(new ObjectInt(4)).value()).toBe(109);
  });
});
