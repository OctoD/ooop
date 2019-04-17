import OperatorBase from './OperatorBase';
import ObjectVariable from '@Types/ObjectVariable';
import ObjectString from '@Types/ObjectString';
import TypeBase from '@Types/TypeBase';

export default class Assign extends OperatorBase<ObjectString, TypeBase> {
  public constructor() {
    super(ObjectString);
  }
  
  public apply(): ObjectVariable {
    return new ObjectVariable(this.rightType.getType(), this.leftType, this.rightType);
  }  
  
  public name(): string {
    return `[operator Assign]`;
  }
}