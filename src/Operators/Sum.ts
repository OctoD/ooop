import OperationError from '../Errors/OperationError';
import ObjectFloat from '../Types/ObjectFloat';
import OperatorBase from './OperatorBase';

export default class Sum extends OperatorBase<ObjectFloat, ObjectFloat> {
  /**
   * Creates an instance of Sum.
   * @memberof Sum
   */
  public constructor() {
    super(ObjectFloat);
  }
  
  /**
   * @returns {ObjectFloat}
   * @memberof Sum
   */
  public apply(): ObjectFloat {
    this.typeCheckLeft();
    this.typeCheckRight();
    try {
      return new ObjectFloat(this.leftType.value() + this.rightType.value())
    } catch {
      throw OperationError.create(this, this.leftType, this.rightType);
    }
  }

  /**
   * @returns {string}
   * @memberof Sum
   */
  public name(): string {
    return `[operator Sum]`;
  }
}
