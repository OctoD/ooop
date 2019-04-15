import { TypeBase } from '../types';
import OperatorBase from '../Operators/OperatorBase';

export default class InvalidRightOperatorType extends TypeError {
  public static create<L extends TypeBase, R extends TypeBase>(operator: OperatorBase<L, R>, type: R) {
    return new InvalidRightOperatorType(`Invalid right operator ${type.name()} in ${operator.name()}`);
  }
  public name = 'InvalidRightOperatorType';
}
