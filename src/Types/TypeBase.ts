import InvalidCastError from '../Errors/InvalidCastError';
import { ConstructorOf } from './ConstructorOf';

export default abstract class TypeBase<TUnderlyingType = unknown> {
  /**
   * @private
   * @type {TUnderlyingType}
   * @memberof TypeBase
   */
  private underlyingValue!: TUnderlyingType;

  /**
   * @static
   * @memberof TypeBase
   */
  public static skipToken = '---invalidate';

  /**
   * Creates an instance of TypeBase.
   * @param {TUnderlyingType} value
   * @memberof TypeBase
   */
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
   * @protected
   * @param {unknown} arg
   * @returns {string}
   * @memberof TypeBase
   */
  protected getUnderlyingTypeOf(arg: unknown): string {
    return Object.prototype.toString.call(arg);
  }

  /**
   * @static
   * @template TType
   * @template TArg
   * @param {ConstructorOf<TType>} Type
   * @param {TArg} arg
   * @returns {TType}
   * @memberof TypeBase
   */
  public static create<TType extends TypeBase<TArg>, TArg>(Type: ConstructorOf<TType>, arg: TArg): TType {
    return new Type(arg);
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
   * @abstract
   * @returns {ConstructorOf<this>}
   * @memberof TypeBase
   */
  public getType(): ConstructorOf<TypeBase> {
    return this.constructor.prototype.constructor;
  };

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
  public value(value?: TypeBase<unknown>): TUnderlyingType {
    if (!!value) {
      this.underlyingValue = this.cast(value).value() as any;
    }
    
    return this.underlyingValue as any;
  };
}