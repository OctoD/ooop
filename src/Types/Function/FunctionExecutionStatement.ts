import TypeBase from '../TypeBase';

export default class FunctionExecutionStatement extends TypeBase {
  public cast<T extends TypeBase<unknown>>(type: T): never {
    throw new Error('Method not implemented.');
  }  
  
  public name(): string {
    return `[object FunctionExecutionStatement]`;
  }

  public signedName(): string {
    return ``;
  }
  
  public nullable(): boolean {
    return false;
  }
}