import { TypeBase } from '../types';
import OperatorBase from '../Operators/OperatorBase';

export default class OperationError extends TypeError {
  public static create(operator: OperatorBase, left: TypeBase, right: TypeBase) {
    return new OperationError(`Invalid operation ${operator.name()} with left ${left.name()} and right ${right.name()}`);
  }
  public name = 'OperationError';
}
