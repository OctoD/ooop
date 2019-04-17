import ObjectError from '@Types/ObjectError';
import ObjectString from '@Types/ObjectString';
import TypeBase from '@Types/TypeBase';

export default class AlreadyDeclaredPropertyError extends ObjectError {
  public static create(key: ObjectString, caller: TypeBase): AlreadyDeclaredPropertyError {
    return new AlreadyDeclaredPropertyError(
      new ObjectString(
        `Cannot redeclare key ${key.value()} on ${caller.name()}`,
      )
    );
  }
  public name() {
    return `[error AlreadyDeclaredPropertyError]`;
  }
}