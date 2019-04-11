import TypeBase from './TypeBase';

export default class ObjectUndefined extends TypeBase<undefined> {
  public constructor() {
    super(<any> TypeBase.skipToken);
    this['underlyingValue'] = undefined;
  }
  
  public cast<T extends TypeBase<unknown>>(type: T): undefined {
    return undefined;
  }  
  
  public name(): string {
    return '[object Undefined]';
  }
  
  public nullable(): boolean {
    return true;
  }
}
