import { ConstructorOf } from '@Types/ConstructorOf';
import InvalidCastError from '@InternalErrors/InvalidCastError';
import TypeBase from '@Types/TypeBase';
import ObjectString from '@Types/ObjectString';
import ObjectBoolean from './ObjectBoolean';
import Throw from '@Operators/Throw';
import ImmutableValueError from './Errors/ImmutableValueError';
import ObjectNull from './ObjectNull';

export default class ObjectVariable<TValue extends TypeBase = TypeBase> extends TypeBase<TValue | ObjectNull> {
  private TypeChecker: ConstructorOf<TValue>;
  private _mutable: ObjectBoolean = new ObjectBoolean(false);
  private _signedName: ObjectString;
  
  public constructor(Type: ConstructorOf<TValue>, name: ObjectString, value: TValue) {
    super(<any> TypeBase.skipToken);

    this.TypeChecker = Type;
    this['underlyingValue'] = value;
    this._signedName = name;
  }
  
  public cast<T extends TypeBase<unknown>>(type: T): TypeBase<any> {
    if (!type.equalsTo(this.TypeChecker)) {
      throw InvalidCastError.create(type, this);
    }

    if (type.equalsTo(ObjectNull)) {
      throw InvalidCastError.create(type, this);
    }
    
    return (this.value() as any).cast(type);
  }

  public immutable(): ObjectVariable<TValue> {
    this._mutable = new ObjectBoolean(false);
    return this;
  }

  public mutable(): ObjectVariable<TValue> {
    this._mutable = new ObjectBoolean(true);
    return this;
  }
  
  public name(): string {
    return `[object Variable]`;
  }
  
  public nullable(): boolean {
    return true;
  }

  /**
   * @returns {ObjectString}
   * @memberof ObjectVariable
   */
  public signedName(): ObjectString {
    return this._signedName;
  }

  public value(value?: TValue | ObjectNull): TValue | ObjectNull {
    if (this._mutable.isFalse().value() && value) {
      return new Throw().left(ImmutableValueError.create(this)).apply();
    }
    
    if (value && !value.equalsTo(ObjectNull)) {
      this['underlyingValue'] = value;
    }

    if (value && value.equalsTo(ObjectNull)) {
      this['underlyingValue'] = new ObjectNull();
    }
    
    return this['underlyingValue'];
  }
}