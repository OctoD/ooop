import { ConstructorOf } from '../../ConstructorOf';
import { TypeBase } from '../../../types';

function instance(Constructor: ConstructorOf<TypeBase>) {
  return new Constructor(TypeBase.skipToken);  
}

/**
 *
 * @export
 * @param {ConstructorOf<TypeBase>} Constructor
 */
export function hasEqualsTo(Constructor: ConstructorOf<TypeBase>) {
  it(`${Constructor.name} has instance member "equalsTo"`, () => {
    const fn = jest.fn();
    const Mock = class {
      name = fn;
    }

    expect(instance(Constructor)).toHaveProperty('equalsTo');
    expect(() => instance(Constructor).equalsTo(<any> Mock)).not.toThrowError();
    expect(typeof instance(Constructor).equalsTo(<any> Mock)).toBe('boolean');
    expect(fn).toBeCalled();
  });
}

/**
 *
 * @export
 * @param {ConstructorOf<TypeBase>} Constructor
 */
export function hasName(Constructor: ConstructorOf<TypeBase>) {
  it(`${Constructor.name} has instance member "name"`, () => {
    expect(instance(Constructor)).toHaveProperty('name');
    expect(() => instance(Constructor).name()).not.toThrowError();
    expect(typeof instance(Constructor).name()).toBe('string');
  });
}

/**
 *
 * @export
 * @param {ConstructorOf<TypeBase>} Constructor
 */
export function hasToString(Constructor: ConstructorOf<TypeBase>) {
  it(`${Constructor.name} has instance member "toString"`, () => {
    expect(instance(Constructor)).toHaveProperty('toString');
    expect(() => instance(Constructor).toString()).not.toThrowError();
    expect(typeof instance(Constructor).toString()).toEqual('string');
  });
}

/**
 *
 * @export
 * @param {ConstructorOf<TypeBase>} Constructor
 */
export function hasValue(Constructor: ConstructorOf<TypeBase>) {
  it(`${Constructor.name} has instance member "value"`, () => {
    expect(instance(Constructor)).toHaveProperty('value');
    expect(() => instance(Constructor).value()).not.toThrowError();
  });
}

/**
 *
 * @export
 * @param {ConstructorOf<TypeBase>} Constructor
 */
export function isNullable(Constructor: ConstructorOf<TypeBase>, condition: boolean) {
  it(`${Constructor.name} is a nullable type`, () => {
    expect(instance(Constructor)).toHaveProperty('nullable');
    expect(() => instance(Constructor).nullable()).not.toThrowError();
    expect(typeof instance(Constructor).nullable()).toBe('boolean');
    expect(instance(Constructor).nullable()).toBe(condition);
  });
}
