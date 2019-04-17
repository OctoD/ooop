import GreaterThan from '@Operators/Math/GreaterThan';
import Sum from '@Operators/Math/Sum';
import TypeBase from '@Types/TypeBase';
import ObjectArray from '@Types/ObjectArray';
import FunctionExecutionStatement from '@Types/Function/FunctionExecutionStatement';
import ObjectInt from '@Types/ObjectInt';
import ObjectNull from '@Types/ObjectNull';

export default class FunctionExecutionBody<T> extends TypeBase<TypeBase<T>> {
  protected currentStatement: FunctionExecutionStatement | ObjectNull = new ObjectNull();
  protected currentStatementIndex: ObjectInt = new ObjectInt(0);
  protected staments: ObjectArray<FunctionExecutionStatement> = new ObjectArray(FunctionExecutionStatement);

  public cast<T extends TypeBase<unknown>>(type: T): never {
    throw new Error('Method not implemented.');
  }

  public exit() {
    
  }

  public next(): FunctionExecutionBody<T> {
    const op = new GreaterThan();
    
    op.left(this.currentStatementIndex);
    op.right(this.staments.length());

    if (op.apply().value()) {
      const sum = new Sum();

      sum.left(this.currentStatementIndex);
      sum.right(new ObjectInt(1));

      this.currentStatementIndex.value(sum.apply());
      this.currentStatement = this.staments.item(this.currentStatementIndex) as FunctionExecutionStatement;
    } else {
      this.currentStatement = new ObjectNull();
    }
    
    return this;
  }

  public name(): string {
    return `[object FunctionExecutionBody]`;
  }

  public nullable(): boolean {
    return false;
  }
}