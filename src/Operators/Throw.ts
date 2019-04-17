import OperatorBase from '@Operators/OperatorBase';
import ObjectError from '@Types/ObjectError';
import ObjectString from '@Types/ObjectString';

export default class Throw extends OperatorBase<ObjectError, never> {
  public constructor() {
    super(ObjectError);
  }
  
  public apply(): never {
    throw this.leftType;
  }  
  
  public name(): string {
    return `[operator Throw]`;
  }

  public right(... arg: any): void {
    const op = new Throw();
    op.left(
      new ObjectError(
        new ObjectString(`Throw operator cannot does not have a right side`),
      ),
    );

    op.apply();
  }
}