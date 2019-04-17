import InvalidCastError from '@InternalErrors/InvalidCastError';
import ObjectBoolean from '@Types/ObjectBoolean';
import ObjectNull from '@Types/ObjectNull';
import ObjectUndefined from '@Types/ObjectUndefined';
import TypeBase from '@Types/TypeBase';

export default class ObjectBit extends TypeBase<0 | 1> {
  public constructor(bit: 0 | 1) {
    super(<any> TypeBase.skipToken);

    if (<any> bit !== TypeBase.skipToken && typeof bit !== 'number' && typeof bit !== 'boolean') {
      throw new InvalidCastError(`Cannot convert ${Object.prototype.toString.call(bit)} to ${this.name()}`);
    }

    this['underlyingValue'] = !!bit ? 1 : 0;
  }
  
  public cast<T extends TypeBase<unknown>>(type: T): ObjectBit {
    if (type.nullable() && type.value() === null) {
      return new ObjectBit(0);
    }

    if (type.equalsTo(ObjectNull) || type.equalsTo(ObjectUndefined)) {
      return new ObjectBit(0);
    }

    const returningValue = parseInt(type.value() as any);

    if (isNaN(returningValue)) {
      return new ObjectBit(0);
    }

    return new ObjectBit(returningValue > 0 ? 1 : 0);
  }

  public name(): string {
    return '[object Bit]';
  }

  public nullable(): boolean {
    return false;
  }

  public toBoolean(): ObjectBoolean {
    return new ObjectBoolean(this.value() === 1);
  }
}