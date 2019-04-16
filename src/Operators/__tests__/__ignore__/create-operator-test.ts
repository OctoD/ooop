import OperatorBase from '../../OperatorBase';
import { ConstructorOf } from '../../../Types/ConstructorOf';
import TypeBase from '../../../Types/TypeBase';

export function mathOperatorBase<L extends TypeBase<number>, R extends TypeBase<number>>(
  Operator: ConstructorOf<OperatorBase<L, R>>, 
  Left: ConstructorOf<L>, 
  Right: ConstructorOf<R>
) {
  return function (leftValue: number, rightValue: number,expected: number) {
    const op = new Operator();
    const left = new Left(leftValue);
    const right = new Right(rightValue);

    expect(() => op.left(left)).not.toThrowError();
    expect(() => op.right(right)).not.toThrowError();
    expect(() => op.apply()).not.toThrowError();
    expect(op.apply().value()).toEqual(expected);
  }
}

export function mathOperatorBaseThrow<L extends TypeBase<number>, R extends TypeBase<number>>(
  Operator: ConstructorOf<OperatorBase<L, R>>,
  ThrowableType: ConstructorOf<TypeBase<any>>
) {
  const op = new Operator();

  op.left(new ThrowableType(TypeBase.skipToken as any) as any);
  op.right(new ThrowableType(TypeBase.skipToken as any) as any);

  expect(() => op.apply()).toThrowError();
}