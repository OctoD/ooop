import ObjectError from '../ObjectError';
import TypeBase from '../TypeBase';
import OperatorBase from '../../Operators/OperatorBase';
import ObjectString from '../ObjectString';

export default class OperationError extends ObjectError {
  public static create<L extends TypeBase, R extends TypeBase>(operator: OperatorBase<L, R>, left: L, right: R) {
    return new OperationError(
      new ObjectString(
        `Invalid operation ${operator.name()} with left ${left.name()} and right ${right.name()}`
      )
    );
  }
  public name() {
    return `[error OperationError]`;
  }
}