import { TypeBase } from '../types';
import OperatorBase from '../Operators/OperatorBase';

export default class OperationError extends TypeError {
  public static create<L extends TypeBase, R extends TypeBase>(operator: OperatorBase<L, R>, left: L, right: R) {
    return new OperationError(`Invalid operation ${operator.name()} with left ${left.name()} and right ${right.name()}`);
  }
  public name = 'OperationError';
}
