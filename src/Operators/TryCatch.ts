import OperatorBase from '@Operators/OperatorBase';
import ObjectFunction from '@Types/ObjectFunction';
import TypeBase from '@Types/TypeBase';
import ObjectError from '@Types/ObjectError';

export default class TryCatch extends OperatorBase<ObjectFunction<(...args: any[]) => TypeBase>, ObjectFunction<(...args: any[]) => ObjectError>> {
  public constructor() {
    super(ObjectFunction);
  }
  
  public apply(... args: any[]): TypeBase<unknown> {
    try {
      return this.leftType.apply(args);
    } catch(error) {
      return this.rightType.call();
    }
  }  

  public catch<K>(arg: ObjectFunction<(...args: any[]) => ObjectError>) {
    return this.right(arg);
  }

  public try<K>(arg: ObjectFunction<(...args: any[]) => TypeBase<K>>) {
    return this.left(arg);
  }
  
  public name(): string {
    return `[operator TryCatch]`;
  }
}