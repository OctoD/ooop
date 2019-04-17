import ObjectError from '@Types/ObjectError';
import TypeBase from '@Types/TypeBase';
import OperatorBase from '@Operators/OperatorBase';
import ObjectString from '@Types/ObjectString';

export default class InvalidRightOperatorTypeError extends ObjectError {
  public static create<L extends TypeBase, R extends TypeBase>(operator: OperatorBase<L, R>, type: R) {
    return new InvalidRightOperatorTypeError(
      new ObjectString(
        `Invalid right operator ${type.name()} in ${operator.name()}`
      )
    );
  }
  public name() {
    return `[error InvalidRightOperatorTypeError]`;
  }
}