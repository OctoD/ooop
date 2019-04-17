import TypeBase from '@Types/TypeBase';
import ObjectString from '@Types/ObjectString';

export default class NullPointerError extends Error {
  public static create(key: ObjectString, caller: TypeBase): NullPointerError {
    return new NullPointerError(`Null pointer error on ${caller.name()} with key ${key.value()}`);
  }
  public name = `NullPointerError`;
}