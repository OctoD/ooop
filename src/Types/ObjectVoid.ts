import TypeBase from './TypeBase';

export default class ObjectVoid extends TypeBase<void> {
  public cast<T extends TypeBase<unknown>>(type: T): TypeBase<void> {
    return new ObjectVoid();
  }  
  
  public name(): string {
    return `[object Void]`;
  }
  
  public nullable(): boolean {
    return false;
  }
}