import OperatorBase from './OperatorBase';
import ObjectFloat from '../Types/ObjectFloat';
import OperationError from '../Errors/OperationError';

export default class Divide extends OperatorBase<ObjectFloat, ObjectFloat> {
  /**
   * Creates an instance of Sum.
   * @memberof Sum
   */
  public constructor () {
    super(ObjectFloat);
  }
  
  public apply(): ObjectFloat {
    this.typeCheckLeft();
    this.typeCheckRight();
    
    try {
      return new ObjectFloat(this.leftType.value() / this.rightType.value());
    } catch {
      throw OperationError.create(this, this.leftType, this.rightType);
    }
  }

  public name(): string {
    return `[operator Divide]`;
  }
}
