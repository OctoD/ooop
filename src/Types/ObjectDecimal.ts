import ObjectNull from '@Types/ObjectNull';
import ObjectUndefined from '@Types/ObjectUndefined';
import TypeBase from '@Types/TypeBase';
import InvalidCastError from '@InternalErrors/InvalidCastError';

export default class ObjectDecimal extends TypeBase<number> {
  public constructor (arg: number) {
    super(<any>TypeBase.skipToken);

    if (typeof arg !== 'number' && arg !== TypeBase.skipToken) {
      throw new InvalidCastError(`Implicit conversion from ${Object.prototype.toString.call(arg)} to ${this.name()}`);
    }

    this['underlyingValue'] = parseFloat(parseFloat(<any> arg).toFixed(2));
  }
  
  public cast<T extends TypeBase<unknown>>(type: T): ObjectDecimal {
    if (type.nullable() && type.value() === null) {
      return new ObjectDecimal(0);
    }

    if (type.equalsTo(ObjectNull) || type.equalsTo(ObjectUndefined)) {
      return new ObjectDecimal(0);
    }

    const returningValue = parseFloat(parseFloat(type.value() as any).toFixed(2));

    if (isNaN(returningValue)) {
      return new ObjectDecimal(0);
    }

    return new ObjectDecimal(returningValue);
  }  
  
  public name(): string {
    return `[object Decimal]`;
  }
  
  public nullable(): boolean {
    return false;
  }
}