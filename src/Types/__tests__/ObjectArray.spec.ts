import ObjectArray from '@Types/ObjectArray';
import ObjectInt from '@Types/ObjectInt';
import * as basetests from './__ignore__/baseTests';
import ObjectString from '@Types/ObjectString';
import ObjectNull from '@Types/ObjectNull';

describe(ObjectArray.name, () => {
  basetests.hasEqualsTo(ObjectArray);
  basetests.hasName(ObjectArray);
  basetests.hasToString(ObjectArray);
  basetests.hasValue(ObjectArray);
  basetests.isNullable(ObjectArray, false);

  test(ObjectArray.prototype.item.name, () => {
    const arr = new ObjectArray(ObjectString, []);
    const arr2 = new ObjectArray(ObjectString, [new ObjectString('qqqq')]);

    expect(arr.item(new ObjectInt(0)).equalsTo(ObjectNull)).toBeTruthy();
    expect(arr2.item(new ObjectInt(0)).equalsTo(ObjectString)).toBeTruthy();
    expect(arr2.item(new ObjectInt(0)).name()).toEqual(new ObjectString('').name());
    expect(arr2.item(new ObjectInt(0)).value()).toEqual(new ObjectString('qqqq').value());
  });

  test(ObjectArray.prototype.length.name, () => {
    const arr = new ObjectArray(ObjectString, []);
    const arr2 = new ObjectArray(ObjectString, [new ObjectString('qqqq')]);

    expect(arr.length().value()).toBe(new ObjectInt(0).value());
    expect(arr2.length().value()).toBe(new ObjectInt(1).value());
  });

  test(ObjectArray.prototype.pop.name, () => {
    const arr = new ObjectArray(ObjectString, [new ObjectString('a'), new ObjectString('b')]);

    expect(arr.length().value()).toBe(new ObjectInt(2).value());

    expect(arr.pop().name()).toEqual(new ObjectString('').name());
    
    expect(arr.length().value()).toBe(new ObjectInt(1).value());
    
    expect(arr.pop().name()).toEqual(new ObjectString('').name());

    expect(arr.length().value()).toBe(new ObjectInt(0).value());

    expect(() => arr.pop()).not.toThrowError();
    expect(() => arr.pop()).not.toThrowError();
    expect(() => arr.pop()).not.toThrowError();
    expect(() => arr.pop()).not.toThrowError();
  });
  
  test(ObjectArray.prototype.push.name, () => {
    const arr = new ObjectArray(ObjectString, []);

    arr.push(new ObjectString(''));

    expect(arr.length().value()).toEqual(new ObjectInt(1).value());

    arr.push(new ObjectString(''));

    expect(arr.length().value()).toEqual(new ObjectInt(2).value());

    arr.push(new ObjectString(''));

    expect(arr.length().value()).toEqual(new ObjectInt(3).value());
  });
});
