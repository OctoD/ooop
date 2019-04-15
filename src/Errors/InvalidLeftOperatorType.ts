import { TypeBase } from '../types';
import OperatorBase from '../Operators/OperatorBase';

export default class InvalidLeftOperatorType extends TypeError {
  public static create<L extends TypeBase, R extends TypeBase>(operator: OperatorBase<L, R>, type: R) {
    return new InvalidLeftOperatorType(`Invalid left operator ${type.name()} in ${operator.name()}`);
  }
  public name = 'InvalidLeftOperatorType';
}
