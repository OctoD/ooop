import * as Reflection from '..';
import ObjectString from '../../Types/ObjectString';
import ObjectArray from '../../Types/ObjectArray';
import ObjectObject from '../../Types/ObjectObject';

describe(`reflection`, () => {
  test(`construct`, () => {
    expect(Reflection.construct(ObjectString, `qwerty`).value()).toBe(`qwerty`);
  });

  test(`createType`, () => {
    expect(() => Reflection.createType(new ObjectString(`Foo`))).not.toThrowError();

    const Mock = Reflection.createType(new ObjectString(`Foo`));

    expect(() => new Mock).not.toThrowError();
    expect(new Mock().name()).toBe(`[object Foo]`);
  });

  test(`typeOf`, () => {
    expect(Reflection.typeOf(ObjectArray)).toBe(`[object Array]`);
    expect(Reflection.typeOf(ObjectObject)).toBe(`[object Object]`);
    expect(Reflection.typeOf(ObjectString)).toBe(`[object String]`);
  });
});
