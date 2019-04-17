import ObjectError from '@Types/ObjectError';
import ObjectString from '@Types/ObjectString';
import TypeBase from '@Types/TypeBase';

export default class NullPointerError extends ObjectError {
  public static create(key: ObjectString, caller: TypeBase): NullPointerError {
    return new NullPointerError(
      new ObjectString(
        `Null pointer error on ${caller.name()} with key ${key.value()}`,
      )
    );
  }
  public name() {
    return `[error NullPointerError]`;
  }
}