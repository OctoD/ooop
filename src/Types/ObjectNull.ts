import TypeBase from './TypeBase';
import InvalidCastError from '../Errors/InvalidCastError';

export default class ObjectNull extends TypeBase<null> {
  public constructor() {
    super(<any> TypeBase.skipToken);
    this['underlyingValue'] = null;
  }
  
  public cast<T extends TypeBase<unknown>>(value: T): ObjectNull {
    if (value.nullable()) {
      return new ObjectNull();
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