import Sum from '@Operators/Math/Sum';
import ObjectFloat from '@Types/ObjectFloat';
import { mathOperatorBase, mathOperatorBaseThrow } from '../__ignore__/create-operator-test';
import ObjectString from '@Types/ObjectString';

describe(`Sum`, () => {
  test(`Works as a division`, () => {
    mathOperatorBase(Sum, ObjectFloat, ObjectFloat)(10, 5, 15);
    mathOperatorBaseThrow(Sum, ObjectString);
  });
});
