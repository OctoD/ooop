import TypeBase from '../TypeBase';
import { ObjectString } from '../../types';

describe(TypeBase.name, () => {
  it(`Is an abstract class`, () => {
    expect(() => Reflect.construct(TypeBase, [])).toThrowError();
    expect(TypeBase.prototype.equalsTo).toBeDefined();
    expect(TypeBase.prototype.toString).toBeDefined();
    expect(typeof TypeBase.prototype.equalsTo).toBe('function');
    expect(typeof TypeBase.prototype.toString).toBe('function');
  });

  it(`Can build a type with a static method`, () => {
    expect(() => TypeBase.create(ObjectString, 'hello')).not.toThrowError();
    expect(TypeBase.create(ObjectString, 'hello').name()).toBe(new ObjectString('').name());
  });
});