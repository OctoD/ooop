import TypeBase from './TypeBase';

export default class ObjectBoolean extends TypeBase<boolean> {
  public cast<T extends TypeBase<unknown>>(type: T): TypeBase<boolean> {
    return new ObjectBoolean(!!type.value());
  }
  
  public isFalse(bool?: ObjectBoolean): ObjectBoolean {
    return new ObjectBoolean((bool || this).value() === false);
  }
  
  public isTrue(bool?: ObjectBoolean): ObjectBoolean {
    return new ObjectBoolean((bool || this).value() === true);
  }
  
  public name(): string {
    return `[object Boolean]`;
  }
  
  public nullable(): boolean {
    return false;
  }
}
