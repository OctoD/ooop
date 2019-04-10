import TypeBase from '../Types/TypeBase';
import ObjectString from '../Types/ObjectString';
import ObjectBoolean from '../Types/ObjectBoolean';
import ObjectVoid from '../Types/ObjectVoid';

type IInterfaceDictionary<T extends object> = {
  [key in keyof T]: TypeBase;
}

/**
 * @export
 * @class InterfaceConstruct
 * @template T
 */
export default class InterfaceConstruct<T extends object> {
  /**
   * @protected
   * @type {string}
   * @memberof Interface
   */
  protected underlyingName: string;
  /**
   * @protected
   * @type {IInterfaceDictionary}
   * @memberof Interface
   */
  protected underlyingDictionary: IInterfaceDictionary<T> = <IInterfaceDictionary<T>>{};

  /**
   * Creates an instance of Interface.
   * @param {ObjectString} name
   * @memberof Interface
   */
  public constructor(name: ObjectString) {
    this.underlyingName = name.value();
  }

  /**
   * @param {ObjectString} key
   * @param {TypeBase} value
   * @memberof Interface
   */
  public add(key: ObjectString, value: TypeBase): ObjectVoid {
    if (this.hasKey(key.value())) {
      throw new TypeError(`Cannot redeclare ${key} on interface`);
    }

    this.underlyingDictionary[key.value()] = value;
    return new ObjectVoid();
  }
  
  /**
   * @param {string} key
   * @returns {boolean}
   * @memberof Interface
   */
  public hasKey(key: string): ObjectBoolean {
    return new ObjectBoolean(key in this.underlyingDictionary);
  }
  
  /**
   * @param {InterfaceConstruct} type
   * @memberof Interface
   */
  public implements<Z extends object>(type: InterfaceConstruct<Z>): ObjectBoolean {
    const ownKeys = this.keys();
    const foreignKeys = type.keys();

    if (ownKeys.length !== foreignKeys.length) {
      return new ObjectBoolean(false);
    }

    while (ownKeys.length > 0) {
      const key = ownKeys.pop();

      if (foreignKeys.indexOf(<any> key) < 0) {
        return new ObjectBoolean(false);
      }
    }

    return new ObjectBoolean(true);
  }

  /**
   * @returns {Array<keyof T>}
   * @memberof InterfaceConstruct
   */
  public keys(): Array<keyof T> {
    return Object.keys(this.underlyingDictionary) as Array<keyof T>;
  }

  /**
   * @param {ObjectString} key
   * @memberof InterfaceConstruct
   */
  public remove(key: ObjectString): ObjectVoid {
    if (this.hasKey(key.value())) {
      delete this.underlyingDictionary[key.value()];
    }

    return new ObjectVoid();
  }
}