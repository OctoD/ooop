import TypeBase from '@Types/TypeBase';
import InvalidCastError from '@InternalErrors/InvalidCastError';
import ObjectString from '@Types/ObjectString';
import Throw from '@Operators/Throw';

export default class ObjectError extends TypeBase<never> {
  public message: ObjectString;
  public stack: ObjectString = new ObjectString(new Error().stack as string);
  
  public constructor(errorMessage: ObjectString = new ObjectString(``)) {
    super(TypeBase.skipToken as never);
    this.message = errorMessage;
  }
  
  public cast<T extends TypeBase<unknown>>(type: T): never {
    throw new InvalidCastError(`Cannot convert any type to ${this.name()}`);
  }
  
  public name(): string {
    return `[object Error]`;
  }
  
  public nullable(): boolean {
    return false;
  }

  public throw(): void {
    const op = new Throw();
    op.left(this);
    op.apply();
  }
}