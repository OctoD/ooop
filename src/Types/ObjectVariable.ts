import { ConstructorOf } from '@Types/ConstructorOf';
import InvalidCastError from '@InternalErrors/InvalidCastError';
import TypeBase from '@Types/TypeBase';
import ObjectString from '@Types/ObjectString';

export default class ObjectVariable<TValue extends TypeBase = TypeBase> extends TypeBase<TValue> {
  private TypeChecker: ConstructorOf<TValue>;
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
    
    return this.value().cast(type);
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
}