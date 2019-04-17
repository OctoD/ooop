import * as basetests from './__ignore__/baseTests';
import ObjectVariable from '@Types/ObjectVariable';
import ObjectString from '@Types/ObjectString';
import ObjectNull from '@Types/ObjectNull';

describe(ObjectVariable.name, () => {
  basetests.hasEqualsTo(ObjectVariable);
  basetests.hasName(ObjectVariable);
  basetests.hasToString(ObjectVariable);
  basetests.hasValue(ObjectVariable);
  basetests.isNullable(ObjectVariable, true);

  it(`Checks mutability`, () => {
    const variable = new ObjectVariable(ObjectString, new ObjectString(`const`), new ObjectString(`immutaaaable`));

    expect(() => variable.immutable()).not.toThrowError();
    expect(() => variable.value(new ObjectString(`exploooode`))).toThrowError();
    expect(() => variable.mutable()).not.toThrowError();
    expect(() => variable.value(new ObjectString(`exploooode`))).not.toThrowError();
  });

  it(`Has a name`, () => {
    const variable = new ObjectVariable(ObjectString, new ObjectString(`const`), new ObjectString(``));
    expect(variable.signedName().value()).toBe(`const`);
  });

  it(`If passing a null value, it will have a ObjectNull`, () => {
    const variable = new ObjectVariable(ObjectString, new ObjectString(`const`), new ObjectString(``));
    expect(variable.mutable().value(new ObjectNull()).value()).toBeNull();
    expect(variable.value().equalsTo(ObjectNull)).toBeTruthy();
  });
});