import ObjectNull from './ObjectNull';
import TypeBase from './TypeBase';
import ObjectUndefined from './ObjectUndefined';

export default class ObjectInt extends TypeBase<number> {
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