import ObjectBoolean from '../../Types/ObjectBoolean';
import OperatorBase from '../OperatorBase';
import ObjectFloat from '../../Types/ObjectFloat';

export default class GreaterThan extends OperatorBase<ObjectFloat, ObjectFloat> {
  public constructor() {
    super(ObjectFloat);
  }
  
  public apply(): ObjectBoolean {
    return new ObjectBoolean(this.leftType.value() > this.rightType.value());
  }  
  
  public name(): string {
    return `[operator GreaterThan]`;
  }
}