import ObjectNull from '@Types/ObjectNull';
import TypeBase from '@Types/TypeBase';
import ObjectUndefined from '@Types/ObjectUndefined';
import ObjectInt from '@Types/ObjectInt';
import ObjectArray from '@Types/ObjectArray';
import ObjectChar from '@Types/ObjectChar';

export default class ObjectString extends TypeBase<string> {
  /**
   * @template T
   * @param {T} type
   * @returns {string}
   * @memberof String
   */
  public cast<T extends TypeBase<unknown>>(type: T): ObjectString {
    if (type.equalsTo(ObjectNull) || type.equalsTo(ObjectUndefined)) {
      return new ObjectString('');
    }

    return new ObjectString(type.toString());
  }

  public length(): ObjectInt {
    return new ObjectInt(this.value().length);
  }

  /**
   * @returns {string}
   * @memberof String
   */
  public name(): string {
    return `[object String]`;
  }
  
  /**
   * @returns {boolean}
   * @memberof String
   */
  public nullable(): boolean {
    return false;
  }

  /**
   * @returns {ObjectArray<ObjectChar>}
   * @memberof ObjectString
   */
  public toCharArray(): ObjectArray<ObjectChar> {
    const chunks = this['underlyingValue'].split('').map(chunk => new ObjectChar(chunk));
    return new ObjectArray(ObjectChar, chunks);
  }

  /**
   * @returns {ObjectArray<ObjectInt>}
   * @memberof ObjectString
   */
  public toIntArray(): ObjectArray<ObjectInt> {
    const chunks = this['underlyingValue'].split('').map(chunk => new ObjectChar(chunk).charCode());
    return new ObjectArray(ObjectInt, chunks);
  }
}
