import ObjectError from '@Types/ObjectError';
import TypeBase from '@Types/TypeBase';
import ObjectString from '@Types/ObjectString';

export default class InvalidCastError extends ObjectError {
  public static create(from: TypeBase, to: TypeBase) {
    return new InvalidCastError(
      new ObjectString(`Invalid cast from type ${from.name()} to ${to.name()}`),
    );
  }
  
  public name() {
    return `[error InvalidCastError]`;
  }
}