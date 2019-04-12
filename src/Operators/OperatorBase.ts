import { TypeBase, ObjectVoid } from '../types';
import { ConstructorOf } from '../Types/ConstructorOf';

export default abstract class OperatorBase {
  /**
   * @protected
   * @type {TypeBase}
   * @memberof OperatorBase
   */
  protected check: TypeBase = new ObjectVoid();
  /**
   * @protected
   * @type {TypeBase}
   * @memberof Operator
   */
  protected leftType: TypeBase = new ObjectVoid();
  /**
   * @protected
   * @type {TypeBase}
   * @memberof Operator
   */
  protected rightType: TypeBase = new ObjectVoid();

  /**
   * Creates an instance of OperatorBase.
   * @param {ConstructorOf<TypeBase>} check
   * @memberof OperatorBase
   */
  public constructor(check: ConstructorOf<TypeBase>) {
    this.check = new check(TypeBase.skipToken);
  }

  /**
   * @abstract
   * @returns {TypeBase}
   * @memberof Operator
   */
  public abstract apply(): TypeBase;

  /**
   * @abstract
   * @returns {TypeBase}
   * @memberof Operator
   */
  public abstract name(): string;

  /**
   * @param {TypeBase} Type
   * @memberof Operator
   */
  public left(Type: TypeBase) {
    this.leftType = Type;
  }

  /**
   * @param {TypeBase} Type
   * @memberof Operator
   */
  public right(Type: TypeBase) {
    this.rightType = Type;
  }
}
