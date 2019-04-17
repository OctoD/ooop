import ObjectError from '@Types/ObjectError';
import ObjectString from '@Types/ObjectString';
import TypeBase from '@Types/TypeBase';
import OperatorBase from '@Operators/OperatorBase';

export default class InvalidLeftOperatorTypeError extends ObjectError {
  public static create<L extends TypeBase, R extends TypeBase>(operator: OperatorBase<L, R>, type: R) {
    return new InvalidLeftOperatorTypeError(
      new ObjectString(
        `Invalid left operator ${type.name()} in ${operator.name()}`
      )
    );
  }
  public name() {
    return `[error InvalidLeftOperatorTypeError]`;
  }
}