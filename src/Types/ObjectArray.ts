import { ObjectInt, ObjectString, ObjectVoid, ObjectNull } from '../types';
import { ConstructorOf } from './ConstructorOf';
import TypeBase from './TypeBase';
import ObjectFunction from './ObjectFunction';

/**
 * @export
 * @class ObjectArray
 * @extends {TypeBase<Z[]>}
 * @template Z
 */
export default class ObjectArray<Z extends TypeBase> extends TypeBase<Z[]> {
  [index: number]: TypeBase;

  /**
   * @private
   * @type {ConstructorOf<Z>}
   * @memberof ObjectArray
   */
  private matcher: ConstructorOf<Z>;
  /**
   * @private
   * @type {number}
   * @memberof ObjectArray
   */
  private size: number = 0;

  /**
   * Creates an instance of ObjectArray.
   * @param {ConstructorOf<Z>} type
   * @param {Z[]} [arg=[]]
   * @memberof ObjectArray
   */
  public constructor(type: ConstructorOf<Z>, arg: Z[] = []) {
    super(arg);
    this.matcher = type;
    this.size = arg.length;

    for (let i = 0; i < arg.length; i++) {
      this[i] = arg[i];
    }
  }

  /**
   * @template T
   * @param {T} _type
   * @returns {ObjectArray<Z>}
   * @memberof ObjectArray
   */
  public cast<T extends TypeBase<unknown>>(_type: T): ObjectArray<Z> {
    throw new Error('Method not implemented.');
  }

  /**
   * @returns {ObjectVoid}
   * @memberof ObjectArray
   */
  public empty(): ObjectVoid {
    for (let i = 0; i < this.length().value(); i++) {
      delete this[i];
    }

    this.size = 0;
    
    return new ObjectVoid();
  }

  /**
   * @template T
   * @param {ObjectFunction<T>} fn
   * @returns {ObjectVoid}
   * @memberof ObjectArray
   */
  public forEach<T extends (el: Z, index: ObjectInt, array: ObjectArray<Z>) => ObjectVoid>(fn: ObjectFunction<T>): ObjectVoid {
    for (let i = 0; i < this.size; i++) {
      const index = new ObjectInt(i);
      
      fn.call(this.item(index), index, this);
    }
    
    return new ObjectVoid();
  }

  /**
   *
   * @param {ObjectInt} position
   * @returns {(Z | ObjectNull)}
   * @memberof ObjectArray
   */
  public item(position: ObjectInt): Z | ObjectNull {
    const value = this[position.value()];

    if (value === undefined) {
      return new ObjectNull();
    }

    return value as Z;
  }

  /**
   * @returns {ObjectInt}
   * @memberof ObjectArray
   */
  public length(): ObjectInt {
    return new ObjectInt(this.size);
  }
  
  /**
   * @returns {string}
   * @memberof ObjectArray
   */
  public name(): string {
    return `[object Array]`;
  }
  
  /**
   * @returns {boolean}
   * @memberof ObjectArray
   */
  public nullable(): boolean {
    return false;
  }

  /**
   * @returns {Z}
   * @memberof ObjectArray
   */
  public pop(): Z {
    const el = this[this.size - 1];

    delete this[this.size - 1];

    this.size = this.size - 1;
    
    return el as Z;
  }
  
  /**
   * @param {Z} el
   * @returns {ObjectInt}
   * @memberof ObjectArray
   */
  public push(el: Z): ObjectInt {
    const casted = (new this.matcher(ObjectArray.skipToken)).cast(el);
    
    this.size = this.size + 1;
    this[this.size] = casted;

    return this.length();
  }

  /**
   * @param {ObjectArray<Z>} [value]
   * @returns {typeof value extends undefined ? Z[] : []}
   * @memberof ObjectArray
   */
  public value(value?: ObjectArray<Z>): typeof value extends undefined ? Z[] : [] {
    if (value) {
      this.empty();
      this.size = value.length().value();

      for (let i = 0; i < this.size; i++) {
        this[i] = value[i];
      }
      
      return [];
    }
    
    const arr = [] as Z[];

    for (let i = 0; i < this.length().value(); i++) {
      arr.push(this[i] as Z);
    }

    return arr as any;
  }
}
