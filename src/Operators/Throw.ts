import OperatorBase from '@Operators/OperatorBase';
import ObjectError from '@Types/ObjectError';
import ObjectString from '@Types/ObjectString';

export default class Throw extends OperatorBase<ObjectError, never> {
  public constructor() {
    super(ObjectError);
  }
  
  public apply(): never {
    const error = new Error();
    // @ts-ignore
    error.message = this.leftType.message.value();
    error.stack = this.leftType.stack.value();
    error.name = this.leftType.name();
    throw error;
  }  
  
  public name(): string {
    return `[operator Throw]`;
  }

  public right(... arg: any) {
    const op = new Throw();
    op.left(
      new ObjectError(
        new ObjectString(`Throw operator cannot does not have a right side`),
      ),
    );

    op.apply();
    return this;
  }
}