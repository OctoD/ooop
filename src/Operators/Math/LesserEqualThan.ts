import ObjectBoolean from '@Types/ObjectBoolean';
import ObjectFloat from '@Types/ObjectFloat';
import OperatorBase from '@Operators/OperatorBase';

export default class LesserThan extends OperatorBase<ObjectFloat, ObjectFloat> {
  public constructor () {
    super(ObjectFloat);
  }

  public apply(): ObjectBoolean {
    return new ObjectBoolean(this.leftType.value() <= this.rightType.value());
  }  
  
  public name(): string {
    return `[operator LesserThan]`;
  }
}