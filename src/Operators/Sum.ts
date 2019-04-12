import OperationError from '../Errors/OperationError';
import ObjectFloat from '../Types/ObjectFloat';
import OperatorBase from './OperatorBase';

export default class Sum extends OperatorBase {
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
    try {
      return new ObjectFloat((this.leftType as any).value() + this.rightType.value())
    } catch {
      throw OperationError.create(this, this.leftType, this.rightType);
    }
  }

  /**
   * @returns {string}
   * @memberof Sum
   */
  public name(): string {
    return `Sum`;
  }
}
