import InvalidCastError from '../Errors/InvalidCastError';
import TypeBase from './TypeBase';
import ObjectUndefined from './ObjectUndefined';
import ObjectNull from './ObjectNull';

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

    if (typeof value !== 'object') {
      throw new TypeError(`Invalid argument`);
    }

    Object.keys(value).forEach(key => {
      this[key] = value;
    });
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
