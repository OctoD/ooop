import TypeBase from './TypeBase';
import ObjectNull from './ObjectNull';
import ObjectUndefined from './ObjectUndefined';
import InvalidCastError from '../Errors/InvalidCastError';

export default class ObjectFloat extends TypeBase<number> {
  public constructor (arg: number) {
    super(<any>TypeBase.skipToken);

    if (typeof arg !== 'number' && arg !== TypeBase.skipToken) {
      throw new InvalidCastError(`Implicit conversion from ${Object.prototype.toString.call(arg)} to ${this.name()}`);
    }

    this['underlyingValue'] = arg;
  }
  
  public cast<T extends TypeBase<unknown>>(type: T): ObjectFloat {
    if (type.nullable() && type.value() === null) {
      return new ObjectFloat(0);
    }

    if (type.equalsTo(ObjectNull) || type.equalsTo(ObjectUndefined)) {
      return new ObjectFloat(0);
    }

    const returningValue = parseFloat(type.value() as any);

    if (isNaN(returningValue)) {
      return new ObjectFloat(0);
    }

    return new ObjectFloat(returningValue);
  }

  public name(): string {
    return `[object Float]`;
  }

  public nullable(): boolean {
    return false;
  }
}