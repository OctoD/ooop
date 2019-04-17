import InvalidCastError from '@InternalErrors/InvalidCastError';
import TypeBase from '@Types/TypeBase';
import ObjectUndefined from '@Types/ObjectUndefined';
import ObjectNull from '@Types/ObjectNull';

export default class ObjectObject extends TypeBase<object> {
  [index: string]: TypeBase 
    | TypeBase['cast']
    | TypeBase['equalsTo']
    | TypeBase['name']
    | TypeBase['nullable']
    | TypeBase['toString']
    | TypeBase['underlyingValue']
    | TypeBase['value'];

  public constructor(value?: unknown) {
    super(<any> value);

    if (value === undefined) {
      throw InvalidCastError.create(new ObjectUndefined(), this);
    }

    if (value === null) {
      throw InvalidCastError.create(new ObjectNull(), this);
    }

    if (typeof value !== 'object' && value !== TypeBase.skipToken) {
      throw new TypeError(`Invalid argument`);
    }

    if (Object.prototype.toString.call(value) === this.name()) {
      Object.keys(value as object).forEach(key => {
        this[key] = value;
      });
    }
  }
  
  /**
   * @template T
   * @param {T} type
   * @returns {object}
   * @memberof ObjectObject
   */
  public cast<T extends TypeBase<unknown>>(type: T): ObjectObject {
    if (type.nullable() && type.value() === null) {
      throw InvalidCastError.create(type, this);
    }

    return new ObjectObject(Object.create(type));
  }
  
  /**
   * @returns {string}
   * @memberof ObjectObject
   */
  public name(): string {
    return `[object Object]`;
  }
  
  /**
   * @returns {boolean}
   * @memberof ObjectObject
   */
  public nullable(): boolean {
    return true;
  }
}
