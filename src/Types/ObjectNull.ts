import TypeBase from './TypeBase';
import InvalidCastError from '../Errors/InvalidCastError';

export default class ObjectNull extends TypeBase<null> {
  public cast<T extends TypeBase<unknown>>(value: T): ObjectNull {
    if (value.nullable()) {
      return new ObjectNull(null);
    }

    throw new InvalidCastError(`Type ${value.name()} is not nullable`);
  }  
  
  public name(): string {
    return `[object Null]`;
  }
  
  public nullable(): boolean {
    return true;
  }
}