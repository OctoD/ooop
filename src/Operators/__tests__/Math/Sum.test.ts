import Sum from '../../Math/Sum';
import ObjectFloat from '../../../Types/ObjectFloat';
import { mathOperatorBase, mathOperatorBaseThrow } from '../__ignore__/create-operator-test';
import { ObjectString } from '../../../types';

describe(`Sum`, () => {
  test(`Works as a division`, () => {
    mathOperatorBase(Sum, ObjectFloat, ObjectFloat)(10, 5, 15);
    mathOperatorBaseThrow(Sum, ObjectString);
  });
});
