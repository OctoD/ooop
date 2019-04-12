import { TypeBase, ObjectNull, ObjectBit, ObjectInt } from '../types';
import OutOfRangeError from '../Errors/OutOfRangeError';
import InvalidCastError from '../Errors/InvalidCastError';
import ObjectBitArray from './ObjectBitArray';

export default class ObjectByte extends TypeBase<number> {
  protected readonly bit0: ObjectBit = new ObjectBit(0);
  protected readonly bit1: ObjectBit = new ObjectBit(0);
  protected readonly bit2: ObjectBit = new ObjectBit(0);
  protected readonly bit3: ObjectBit = new ObjectBit(0);
  protected readonly bit4: ObjectBit = new ObjectBit(0);
  protected readonly bit5: ObjectBit = new ObjectBit(0);
  protected readonly bit6: ObjectBit = new ObjectBit(0);
  protected readonly bit7: ObjectBit = new ObjectBit(0);
  protected readonly bit8: ObjectBit = new ObjectBit(0);

  /**
   * Creates an instance of ObjectByte.
   * @param {(null | number)} arg
   * @memberof ObjectByte
   */
  public constructor(arg: null | number) {
    super(<any> TypeBase.skipToken);

    if (arg === null) {
      arg = 0;
    }

    if (typeof arg !== 'number' && arg !== ObjectBit.skipToken) {
      throw new InvalidCastError(`Cannot implicitily convert ${this.getUnderlyingTypeOf(arg)} to ${this.name()}`);
    }

    if (arg < 0 || arg > 256) {
      throw OutOfRangeError.create(new ObjectInt(0), new ObjectInt(255));
    }

    this['underlyingValue'] = arg;

    const bitLike = arg.toString(2);

    for (let i = 0; i < 8; i++) {
      this.item(new ObjectInt(i)).value(new ObjectBit(parseInt(bitLike[i]) as 0));
    }
  }

  /**
   * @protected
   * @param {number} value
   * @returns {boolean}
   * @memberof ObjectByte
   */
  protected isInRange(value: number): boolean {
    return value > 0 && value < 256;
  }
  
  /**
   * @template T
   * @param {T} type
   * @returns {TypeBase<number>}
   * @memberof ObjectByte
   */
  public cast<T extends TypeBase<unknown>>(type: T): TypeBase<number> {
    if (type.equalsTo(ObjectNull)) {
      return new ObjectByte(0);
    }

    return new ObjectByte(this['underlyingValue']);
  }  

  /**
   * @param {ObjectInt} position
   * @returns {ObjectBit}
   * @memberof ObjectByte
   */
  public item(position: ObjectInt): ObjectBit {
    if (position.value() < 0 || position.value() > 8) {
      throw OutOfRangeError.create(new ObjectInt(0), new ObjectInt(8));
    }

    return (this as any)[`bit${position.value()}`];
  }
  
  /**
   * @returns {string}
   * @memberof ObjectByte
   */
  public name(): string {
    return `[object Byte]`;
  }
  
  /**
   * @returns {boolean}
   * @memberof ObjectByte
   */
  public nullable(): boolean {
    return false;
  }

  /**
   * @returns {ObjectBitArray}
   * @memberof ObjectByte
   */
  public toBitArray(): ObjectBitArray {
    const instance = new ObjectBitArray();

    for (let i = 0; i < 8; i++) {
      instance.push(this.item(new ObjectInt(i)));
    }

    return instance;
  }

  /**
   * @returns {ObjectInt}
   * @memberof ObjectByte
   */
  public toInt(): ObjectInt {
    let bitArray = [] as number[];

    for (let i = 0; i < 8; i++) {
      bitArray.push((this.item(new ObjectInt(i)).value()));
    }
    
    return new ObjectInt(parseInt(bitArray.join(''), 2));
  }

  /**
   * @param {(ObjectInt | ObjectByte)} [value]
   * @returns {number}
   * @memberof ObjectByte
   */
  public value(value?: ObjectInt | ObjectByte): number {
    if (value !== undefined) {
      const stringarray = value.value().toString(2);

      for (let i = 0; i < 8; i++) {
        this.item(new ObjectInt(i)).value(new ObjectInt(parseInt(stringarray[i])));
      }
    }

    return this.toInt().value();
  }
}
