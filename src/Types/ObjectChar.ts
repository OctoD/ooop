import InvalidCastError from '../Errors/InvalidCastError';
import ObjectInt from './ObjectInt';
import ObjectString from './ObjectString';
import TypeBase from './TypeBase';

export default class ObjectChar extends TypeBase<string> {
  /**
   * Creates an instance of ObjectChar.
   * @param {string} char
   * @memberof ObjectChar
   */
  public constructor(char: string | number) {
    super(TypeBase.skipToken);

    if (typeof char === "number") {
      this['underlyingValue'] = String.fromCharCode(char);
    } else if (typeof char === 'string' && char === TypeBase.skipToken) {
      this['underlyingValue'] = 'a';
    } else if (typeof char === 'string' && char !== TypeBase.skipToken && char.length === 1) {
      this['underlyingValue'] = char;
    } else {
      throw new InvalidCastError(`Implicit conversion from ${Object.prototype.toString.call(char)} ${this.name()}`);
    }
  }
  
  /**
   * @template T
   * @param {T} type
   * @returns {string}
   * @memberof Char
   */
  public cast<T extends TypeBase<unknown>>(type: T): ObjectChar {
    if (type.equalsTo(ObjectInt)) {
      return new ObjectChar(String.fromCharCode((type as ObjectInt).value()));
    }

    if (type.equalsTo(ObjectString) && type.toString().length === 1) {
      return new ObjectChar(type.value() as string);
    }

    throw new InvalidCastError(`Cannot convert ${type.name()} to ${this.name()}`);
  }

  /**
   * @returns {ObjectInt}
   * @memberof ObjectChar
   */
  public charCode(): ObjectInt {
    return this.toInt();
  }
  
  /**
   * @returns {string}
   * @memberof Char
   */
  public name(): string {
    return '[object Char]';
  }

  /**
   * @returns {boolean}
   * @memberof Char
   */
  public nullable(): boolean {
    return false;
  }

  /**
   * @returns {ObjectInt}
   * @memberof ObjectChar
   */
  public toInt(): ObjectInt {
    return new ObjectInt(this.value().charCodeAt(0));
  }
}