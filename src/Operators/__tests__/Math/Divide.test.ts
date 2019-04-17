import Divide from '@Operators/Math/Divide';
import { mathOperatorBase, mathOperatorBaseThrow } from '../__ignore__/create-operator-test';
import ObjectFloat from '@Types/ObjectFloat';
import ObjectString from '@Types/ObjectString';

describe(`Divide`, () => {
  test(`Works as a division`, () => {
    mathOperatorBase(Divide, ObjectFloat, ObjectFloat)(10, 5, 2);
    mathOperatorBaseThrow(Divide, ObjectString);
  });
});
