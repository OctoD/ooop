import TypeBase from './TypeBase';
import ObjectNull from './ObjectNull';
import ObjectUndefined from './ObjectUndefined';

export default class ObjectFloat extends TypeBase<number> {
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