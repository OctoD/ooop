import ObjectError from '../ObjectError';
import ObjectString from '../ObjectString';
import TypeBase from '../TypeBase';

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