import { ConstructorOf } from '@Types/ConstructorOf';
import InvalidLeftOperatorType from '@InternalErrors/InvalidLeftOperatorType';
import TypeBase from '@Types/TypeBase';
import ObjectVoid from '@Types/ObjectVoid';
import ObjectBoolean from '@Types/ObjectBoolean';

export default abstract class OperatorBase<LeftType extends TypeBase, RightType extends TypeBase> {
  /**
   * @protected
   * @type {TypeBase}
   * @memberof OperatorBase
   */
  protected check: ConstructorOf<TypeBase> = ObjectVoid;
  /**
   * @protected
   * @type {LeftType}
   * @memberof Operator
   */
  protected leftType: LeftType = new ObjectVoid() as LeftType;
  /**
   * @protected
   * @type {RightType}
   * @memberof Operator
   */
  protected rightType: RightType = new ObjectVoid() as RightType;

  /**
   * Creates an instance of OperatorBase.
   * @param {ConstructorOf<TypeBase>} check
   * @memberof OperatorBase
   */
  public constructor(check: ConstructorOf<TypeBase>) {
    this.check = check;
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
   * @protected
   * @returns {(void | never)}
   * @memberof OperatorBase
   */
  protected typeCheckLeft(): ObjectBoolean | never {
    if (!this.leftType.equalsTo(this.check)) {
      throw InvalidLeftOperatorType.create(this, <any> this.leftType);
    }

    return new ObjectBoolean(true);
  }

  /**
   * @protected
   * @returns {(void | never)}
   * @memberof OperatorBase
   */
  protected typeCheckRight(): ObjectBoolean | never {
    if (!this.leftType.equalsTo(this.check)) {
      throw InvalidLeftOperatorType.create(this, <any> this.leftType);
    }

    return new ObjectBoolean(true);
  }

  /**
   * @param {LeftType} Type
   * @memberof Operator
   */
  public left(Type: LeftType) {
    this.leftType = Type;
  }

  /**
   * @param {RightType} Type
   * @memberof Operator
   */
  public right(Type: RightType) {
    this.rightType = Type;
  }
}
