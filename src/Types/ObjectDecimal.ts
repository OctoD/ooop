import TypeBase from './TypeBase';
import ObjectNull from './ObjectNull';
import ObjectUndefined from './ObjectUndefined';

export default class ObjectDecimal extends TypeBase<number> {
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