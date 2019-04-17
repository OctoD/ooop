import ObjectNull from '@Types/ObjectNull';
import TypeBase from '@Types/TypeBase';
import ObjectUndefined from '@Types/ObjectUndefined';
import InvalidCastError from '@InternalErrors/InvalidCastError';

export default class ObjectInt extends TypeBase<number> {
  public constructor(arg: number) {
    super(<any> TypeBase.skipToken);

    if (typeof arg !== 'number' && arg !== TypeBase.skipToken) {
      throw new InvalidCastError(`Implicit conversion from ${Object.prototype.toString.call(arg)} to ${this.name()}`);
    }

    this['underlyingValue'] = arg;
  }
  
  public cast<T extends TypeBase<unknown>>(type: T): ObjectInt {
    if (type.nullable() && type.value() === null) {
      return new ObjectInt(0);
    }

    if (type.equalsTo(ObjectNull) || type.equalsTo(ObjectUndefined)) {
      return new ObjectInt(0);
    }

    const returningValue = parseInt(type.value() as any);

    if (isNaN(returningValue)) {
      return new ObjectInt(0);
    }

    return new ObjectInt(returningValue);
  }  
  
  public name(): string {
    return '[object Int]';
  }
  
  public nullable(): boolean {
    return false;
  }
}