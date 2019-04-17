import TypeBase from '@Types/TypeBase';

export default class ObjectVoid extends TypeBase<void> {
  public constructor() {
    super(<any> TypeBase.skipToken);
  }
  
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