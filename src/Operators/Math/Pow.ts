import OperatorBase from '@Operators/OperatorBase';
import ObjectFloat from '@Types/ObjectFloat';
import OperationError from '@InternalErrors/OperationError';

export default class Pow extends OperatorBase<ObjectFloat, ObjectFloat> {
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
      return new ObjectFloat(Math.pow(this.leftType.value(), this.rightType.value()));
    } catch {
      throw OperationError.create(this, this.leftType, this.rightType);
    }
  }

  public name(): string {
    return `[operator Pow]`;
  }
}
