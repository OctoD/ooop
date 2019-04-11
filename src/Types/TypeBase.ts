import InvalidCastError from '../Errors/InvalidCastError';

export default abstract class TypeBase<TUnderlyingType = unknown> {
  /**
   * @private
   * @type {TUnderlyingType}
   * @memberof TypeBase
   */
  private underlyingValue: TUnderlyingType;

  /**
   * @static
   * @memberof TypeBase
   */
  public static skipToken = '---invalidate';

  public constructor(value: TUnderlyingType) {
    const uncastedType = Object.prototype.toString.call(value);
    const ownedType = this.name();
    
    if (!this.nullable() && (value === undefined || value === null)) {
      throw new InvalidCastError(`Undefined argument in ${this.name()}`);
    } else if (<any>value !== TypeBase.skipToken && uncastedType === ownedType) {
      this.underlyingValue = value;
    } else if (<any>value !== TypeBase.skipToken) {
      throw new InvalidCastError(`Cannot convert ${uncastedType} to ${ownedType}`);
    }
  }
  
  /**
   * @abstract
   * @param {unknown} type
   * @returns {TUnderlyingType}
   * @memberof TypeBase
   */
  public abstract cast<T extends TypeBase>(type: T): TypeBase<TUnderlyingType>;

  /**
   * @param {TypeBase} type
   * @returns {boolean}
   * @memberof TypeBase
   */
  public equalsTo<T extends new (... args: any[]) => TypeBase>(type: T): boolean {
    return new type(TypeBase.skipToken).name() === this.name();
  }

  /**
   * @memberof TypeBase
   */
  public abstract name(): string;

  /**
   * @abstract
   * @returns {boolean}
   * @memberof TypeBase
   */
  public abstract nullable(): boolean;

  /**
   * @returns {string}
   * @memberof TypeBase
   */
  public toString(): string {
    return String(this.underlyingValue);
  }

  /**
   * @abstract
   * @returns {TUnderlyingType}
   * @memberof TypeBase
   */
  public value(value?: TypeBase<unknown>): typeof value extends unknown ? TUnderlyingType : void {
    if (!!value) {
      this.underlyingValue = this.cast(value).value();
      return;
    }
    
    return this.underlyingValue;
  };
}